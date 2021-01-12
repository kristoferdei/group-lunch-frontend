import { shallow } from 'enzyme'
import Navigation from '../../components/Nav'
import React from 'react'

describe('Navigation component', () => {
  it('should render without crashing', () => {
    shallow(<Navigation />)
  })

  it('should render the range', () => {
    const wrapper = shallow(<Navigation />)
    const range = <p className="mt-3 text-gray-600 sm:mx-3 sm:mt-0 cursor-default">Range:</p>
    expect(wrapper.contains(range)).toEqual(true)
  })

  it('should render the slider', () => {
    const wrapper = shallow(<Navigation />)
    const slider = <input type="range" />
    expect(wrapper.contains(slider)).toEqual(true)
  })

  it('should render the sort', () => {
    const wrapper = shallow(<Navigation />)
    const sort = <p className="mt-3 text-gray-600 sm:mx-3 sm:mt-0 cursor-default">Sort by:</p>
    expect(wrapper.contains(sort)).toEqual(true)
  })

  it('should render the select', () => {
    const wrapper = shallow(<Navigation />)
    const select = (
      <select
        className="block shadow border border-gray-400 hover:border-gray-500
                            rounded leading-tight focus:outline-none"
      >
        <option>Distance</option>
        <option>Price</option>
      </select>
    )
    expect(wrapper.contains(select)).toEqual(true)
  })
})
