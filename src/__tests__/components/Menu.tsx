import React from 'react'
import { shallow } from 'enzyme'
import Menu from '../../components/Menu'

describe('Menu component', () => {
  it('should render without crashing', () => {
    shallow(<Menu />)
  })

  it('should render the previous', () => {
    const wrapper = shallow(<Menu />)
    const previous = <span className="cursor-default">Previous</span>
    expect(wrapper.contains(previous)).toEqual(true)
  })

  it('should render the one', () => {
    const wrapper = shallow(<Menu />)
    const one = <span className="cursor-default">1</span>
    expect(wrapper.contains(one)).toEqual(true)
  })

  it('should render the two', () => {
    const wrapper = shallow(<Menu />)
    const two = <span className="cursor-default">2</span>
    expect(wrapper.contains(two)).toEqual(true)
  })

  it('should render the three', () => {
    const wrapper = shallow(<Menu />)
    const three = <span className="cursor-default">3</span>
    expect(wrapper.contains(three)).toEqual(true)
  })

  it('should render the next', () => {
    const wrapper = shallow(<Menu />)
    const next = <span className="cursor-default">Next</span>
    expect(wrapper.contains(next)).toEqual(true)
  })
})
