import { shallow } from 'enzyme'
import LoginForm from '../../components/LoginForm'
import React from 'react'

describe('LoginForm component', () => {
  it('should render without crashing', () => {
    shallow(<LoginForm />)
  })

  it('should render the username label', () => {
    const wrapper = shallow(<LoginForm />)
    const usernameLabel = (
      <label htmlFor="username" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2">
        Username
      </label>
    )
    expect(wrapper.contains(usernameLabel)).toEqual(true)
  })

  it('should render the password label', () => {
    const wrapper = shallow(<LoginForm />)
    const passwordLabel = (
      <label htmlFor="password" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2">
        Password
      </label>
    )
    expect(wrapper.contains(passwordLabel)).toEqual(true)
  })

  it('should render the login button', () => {
    const wrapper = shallow(<LoginForm />)
    const loginButton = (
      <button
        className="bg-gray-700 border border-gray-700 text-lg text-white
                        hover:text-gray-900 hover:border-gray-700 hover:bg-transparent font-medium py-2 px-4 rounded focus:outline-none"
      >
        Login
      </button>
    )
    expect(wrapper.contains(loginButton)).toEqual(true)
  })

  it('should render the register hyperlink', () => {
    const wrapper = shallow(<LoginForm />)
    const registerHyperlink = (
      <a
        className="text-center mt-4 border border-gray-700 bg-transparent hover:bg-gray-700
                              text-lg text-gray-900 hover:text-white font-medium py-2 px-4 rounded focus:outline-none"
        href="/register"
      >
        Sign Up
      </a>
    )
    expect(wrapper.contains(registerHyperlink)).toEqual(true)
  })
})
