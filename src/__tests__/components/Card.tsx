import { shallow } from 'enzyme'
import React from 'react'
import Card from '../../components/Card'

describe('Card component', () => {
  it('should render without crashing', () => {
    shallow(<Card />)
  })
})
