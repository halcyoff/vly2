import React from 'react'
import test from 'ava'
import { renderWithIntl } from '../../../lib/react-intl-test-helper'

import OpDetail from '../OpDetail'
import ops from './Op.fixture'

test.before('Setup fixtures', (t) => {
  // Initial opportunities
  t.context.ops = ops
  t.context.op = ops[0]
  t.context.archivedOp = {
    ...ops[1],
    status: 'completed'
  }
})

test('render the detail with op', t => {
  const wrapper = renderWithIntl(<OpDetail op={t.context.op} onPress={() => {}} />)
  t.truthy(wrapper.find('Head'))
  t.is(wrapper.find('h1').text(), t.context.op.name)
})




test.serial('render the tabs', t => {


  const wrapper = renderWithIntl(<OpDetail op={t.context.op} onPress={() => {}} />)
t.is(wrapper.find('.ant-tabs-tab').children().text(), 'About')
t.is(wrapper.find('.ant-tabs-tab').children().text(), 'Questions')
t.is(wrapper.find('.ant-tabs-tab').children().text(), 'Updates')
t.is(wrapper.find('.ant-tabs-tab').children().text(), 'Manage Volunteers')
t.is(wrapper.find('.ant-tabs-tab').children().text(), 'Edit Activity')



}
// test.todo('verify markdown in description is rendered')
