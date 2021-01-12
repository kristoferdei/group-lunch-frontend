import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { shallow } from 'enzyme'
import Main from '../../pages/Main'
import Card from '../../components/Card'
import React from 'react'

describe('Main page', () => {
  it('should render without crashing', () => {
    shallow(<Main />)
  })

  it('should render the header', () => {
    const wrapper = shallow(<Main />)
    const header = <Header />
    expect(wrapper.contains(header)).toEqual(true)
  })

  it('should render the card', () => {
    const wrapper = shallow(<Main />)
    const card = <Card />
    expect(wrapper.contains(card)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Main />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
