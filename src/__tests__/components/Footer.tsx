import React from 'react'
import Footer from '../../components/Footer'
import { shallow } from 'enzyme'

describe('Footer component', () => {
  it('should render without crashing', () => {
    shallow(<Footer />)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Footer />)
    const title = <p className="text-xl font-medium text-gray-500 cursor-default">Group Lunch</p>
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the date', () => {
    const wrapper = shallow(<Footer />)
    const date = <p className="py-2 text-lg font-light text-gray-500 sm:py-0 cursor-default">2020</p>
    expect(wrapper.contains(date)).toEqual(true)
  })
})
