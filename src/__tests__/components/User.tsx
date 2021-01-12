import { shallow } from 'enzyme'
import User from '../../components/User'
import React from 'react'

describe('User component', () => {
  it('should render without crashing', () => {
    shallow(<User />)
  })

  it('should render the profile', () => {
    const wrapper = shallow(<User />)
    const profile = <h1 className="mx-3 text-white font-black text-3xl lg:text-4xl cursor-default">Profile</h1>
    expect(wrapper.contains(profile)).toEqual(true)
  })

  it('should render the username', () => {
    const wrapper = shallow(<User />)
    const username = <h1 className="px-2 text-xl text-gray-900 cursor-default">Username:</h1>
    expect(wrapper.contains(username)).toEqual(true)
  })

  it('should render the email', () => {
    const wrapper = shallow(<User />)
    const email = <h1 className="px-2 text-xl text-gray-900 cursor-default">Email:</h1>
    expect(wrapper.contains(email)).toEqual(true)
  })

  it('should render the back hyperlink', () => {
    const wrapper = shallow(<User />)
    const back = (
      <a
        className="bg-gray-700 border border-gray-700 text-lg text-white
                        hover:text-gray-900 hover:border-gray-700 hover:bg-transparent font-medium py-2 px-4 rounded focus:outline-none"
        href="/"
      >
        Back
      </a>
    )
    expect(wrapper.contains(back)).toEqual(true)
  })
})
