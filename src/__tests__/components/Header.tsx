import React from 'react'
import Header from '../../components/Header'
import { shallow } from 'enzyme'
import Title from '../../components/Title'
import Navigation from '../../components/Nav'

describe('Header component', () => {
  it('should render without crashing', () => {
    shallow(<Header />)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Header />)
    const title = <Title />
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the navigation', () => {
    const wrapper = shallow(<Header />)
    const navigation = <Navigation />
    expect(wrapper.contains(navigation)).toEqual(true)
  })
})
