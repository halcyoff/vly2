import test from 'ava'
import PersonCard from '../PersonCard'
import { render } from 'enzyme'
import objectid from 'objectid'

const person = {
  _id: objectid().toString(),
  name: 'Testy McTestface',
  nickname: 'Testy',
  imgUrl: 'http://example.com/example.jpg'
}

test('PersonCard renders properly', t => {
  const wrapper = render(<PersonCard person={person} />)
  t.is(wrapper.find('h4').first().text(), person.name)
  t.is(wrapper.find('img').first().prop('src'), person.imgUrl)
})
