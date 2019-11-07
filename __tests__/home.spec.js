import test from 'ava'
import { PersonHomePageTest } from '../pages/home/home'
import { mountWithIntl } from '../lib/react-intl-test-helper'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import objectid from 'objectid'
import ops from '../server/api/opportunity/__tests__/opportunity.fixture'
import people from '../server/api/person/__tests__/person.fixture'
import archivedOpportunities from '../server/api/archivedOpportunity/__tests__/archivedOpportunity.fixture'
import tags from '../server/api/tag/__tests__/tag.fixture'
import orgs from '../server/api/organisation/__tests__/organisation.fixture'

import { MemberStatus } from '../server/api/member/member.constants'
import reduxApi from '../lib/redux/reduxApi'
import adapterFetch from 'redux-api/lib/adapters/fetch'
import thunk from 'redux-thunk'
import { API_URL } from '../lib/callApi'
const { sortedLocations, regions } = require('../server/api/location/locationData')

test.before('Setup fixtures', (t) => {
  // not using mongo or server here so faking ids
  people.map(p => { p._id = objectid().toString() })
  orgs.map(p => { p._id = objectid().toString() })
  const me = people[0]
  // setup list of opportunities, I am owner for the first one
  ops.map((op, index) => {
    op._id = objectid().toString()
    op.requestor = people[index]._id
  })
  // take ownership of 2nd event and set to done
  archivedOpportunities[1].requestor = me._id
  archivedOpportunities[1].status = 'completed'

  // setup list of interests, i'm interested in first 5 ops
  const interestStates = ['interested', 'invited', 'committed', 'declined', 'completed', 'cancelled']
  const interests = ops.filter(op => op.requestor !== me._id).map((op, index) => {
    return ({
      _id: objectid().toString(),
      person: me._id,
      opportunity: op,
      comment: `${index}: ${me.nickname} is interested in ${op.name}`,
      status: index < interestStates.length ? interestStates[index] : 'interested'
    })
  })

  const recommendedOps = {
    basedOnLocation: ops,
    basedOnSkills: []
  }

  // Initial members added into test db
  const members = [
    {
      _id: objectid().toString(),
      person: people[0]._id,
      organisation: orgs[0],
      validation: 'test follower',
      status: MemberStatus.FOLLOWER
    },
    // person 1 is member of two orgs
    // org 1 has two members
    {
      _id: objectid().toString(),
      person: people[1]._id,
      organisation: orgs[0],
      validation: 'test member 1',
      status: MemberStatus.MEMBER
    },
    {
      _id: objectid().toString(),
      person: people[1]._id,
      organisation: orgs[1],
      validation: 'test member 1',
      status: MemberStatus.MEMBER
    },
    {
      _id: objectid().toString(),
      person: people[3]._id,
      organisation: orgs[1],
      validation: 'test member 3',
      status: MemberStatus.MEMBER
    }
  ]

  t.context = {
    me,
    people,
    ops,
    archivedOpportunities,
    interests,
    recommendedOps,
    tags,
    orgs,
    members
  }

  t.context.mockStore = configureStore([thunk])(
    {
      session: {
        isAuthenticated: true,
        user: { nickname: me.nickname },
        me
      },
      opportunities: {
        sync: false,
        syncing: false,
        loading: false,
        data: ops,
        request: null
      },
      interests: {
        sync: false,
        syncing: false,
        loading: false,
        data: interests,
        request: null
      },
      members: {
        sync: true,
        syncing: false,
        loading: false,
        data: t.context.members,
        request: null
      },
      archivedOpportunities: {
        sync: false,
        syncing: false,
        loading: false,
        data: archivedOpportunities,
        request: null
      },
      recommendedOps: {
        sync: false,
        syncing: false,
        loading: false,
        data: [recommendedOps],
        request: null
      },
      locations: {
        data: [
          {
            regions: regions,
            locations: sortedLocations
          }
        ]
      },
      tags: {
        sync: false,
        syncing: false,
        loading: false,
        data: tags,
        request: null

      },
      orgs: {
        sync: false,
        syncing: false,
        loading: false,
        data: orgs,
        request: null
      }
    }
  )
})

test.after.always(() => {

})

test.serial('render volunteer home page - Active tab', t => {
  const props = {
    me: t.context.me
  }

  const wrapper = mountWithIntl(
    <Provider store={t.context.mockStore}>
      <PersonHomePageTest {...props} />
    </Provider>)
  t.is(wrapper.find('h3').first().text(), t.context.me.nickname + "'s Requests")
  t.is(wrapper.find('.ant-tabs-tab-active').first().text(), 'Active')
  t.is(wrapper.find('.ant-tabs-tabpane-active h3').first().text(), 'Getting Started')
  t.is(wrapper.find('.ant-tabs-tabpane-active img').length, 13)
})

test.serial('render volunteer home page - History tab', t => {
  const props = {
    me: t.context.me
  }

  const wrapper = mountWithIntl(
    <Provider store={t.context.mockStore}>
      <PersonHomePageTest {...props} />
    </Provider>)
  wrapper.find('.ant-tabs-tab').at(1).simulate('click')
  t.is(wrapper.find('.ant-tabs-tab-active').first().text(), 'History')
  t.is(wrapper.find('.ant-tabs-tabpane-active h3').first().text(), 'Completed Requests')
  t.is(wrapper.find('.ant-tabs-tabpane-active img').length, 2)
})

test.serial('render volunteer home page - Profile tab', t => {
  const props = {
    me: t.context.me
  }

  const wrapper = mountWithIntl(
    <Provider store={t.context.mockStore}>
      <PersonHomePageTest {...props} />
    </Provider>)
  wrapper.find('.ant-tabs-tab').at(2).simulate('click')
  t.is(wrapper.find('.ant-tabs-tab-active').first().text(), 'Profile')
  const tab3 = wrapper.find('TabPane').at(2)
  t.is(tab3.find('h1').first().text(), t.context.me.name)
})

test.serial('render Edit Profile ', async t => {
  const props = { me: t.context.me }
  const wrapper = mountWithIntl(
    <Provider store={t.context.mockStore}>
      <PersonHomePageTest {...props} />
    </Provider>)
  wrapper.find('.ant-tabs-tab').at(2).simulate('click')
  t.is(wrapper.find('.ant-tabs-tab-active').first().text(), 'Profile')
  t.is(wrapper.find('Button').first().text(), 'Edit')
  wrapper.find('Button').first().simulate('click')
  t.is(wrapper.find('Button').first().text(), 'Cancel')
  wrapper.find('Button').first().simulate('click') // cancel edit
  wrapper.find('Button').first().simulate('click') // edit again
  t.is(wrapper.find('Button').last().text(), 'Save')
  wrapper.find('Form').first().simulate('submit')
})

test.serial('retrieve completed archived opportunities', async t => {
  const props = {
    me: t.context.me
  }
  const { fetchMock } = require('fetch-mock')
  const myMock = fetchMock.sandbox()
  myMock.get(API_URL + '/archivedOpportunities/', { body: { archivedOpportunities } })
  reduxApi.use('fetch', adapterFetch(myMock))
  const wrapper = mountWithIntl(
    <Provider store={t.context.mockStore}>
      <PersonHomePageTest {...props} />
    </Provider>)
  const res = await wrapper.find('PersonHomePage').first().instance().getArchivedOpportunitiesByStatus('completed')
  t.is(res.length, 2)
  t.is(res[0], archivedOpportunities[0])
  t.is(res[1], archivedOpportunities[1])
})

test.serial('ensure oprecommendations is passed recommended ops retrieved from server', async t => {
  const props = {
    me: t.context.me
  }

  const wrapper = mountWithIntl(
    <Provider store={t.context.mockStore}>
      <PersonHomePageTest {...props} />
    </Provider>)
  const recommendedOps = await wrapper.find('OpRecommendations').first().instance().props.recommendedOps

  t.is(recommendedOps, t.context.recommendedOps)
})
