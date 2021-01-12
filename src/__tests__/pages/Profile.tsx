import { shallow } from 'enzyme'
import Profile from '../../pages/Profile'
import User from '../../components/User'
import React from 'react'

describe('Profile page', () => {
  it('should render without crashing', () => {
    shallow(<Profile />)
  })

  it('should render the user', () => {
    const wrapper = shallow(<Profile />)
    const user = <User />
    expect(wrapper.contains(user)).toEqual(true)
  })
})
