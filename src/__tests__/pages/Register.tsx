import { shallow } from 'enzyme'
import Register from '../../pages/Register'
import RegisterForm from '../../components/RegisterForm'
import React from 'react'

describe('Register page', () => {
  it('should render without crashing', () => {
    shallow(<Register />)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Register />)
    const title = <h1 className="mb-8 text-3xl text-center text-gray-900">Sign Up</h1>
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the register form', () => {
    const wrapper = shallow(<Register />)
    const form = <RegisterForm />
    expect(wrapper.contains(form)).toEqual(true)
  })

  it('should render the login hyperlink', () => {
    const wrapper = shallow(<Register />)
    const login = (
      <a
        className="no-underline border-b border-blue-500
                            hover:border-blue-700 text-blue-500 hover:text-blue-700 ml-2"
        href="/"
      >
        Log in
      </a>
    )
    expect(wrapper.contains(login)).toEqual(true)
  })
})
