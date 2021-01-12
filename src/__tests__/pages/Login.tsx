import { shallow } from 'enzyme'
import Login from '../../pages/Login'
import LoginForm from '../../components/LoginForm'
import login from '../../assets/images/login.jpg'
import React from 'react'

describe('Login page', () => {
  it('should render without crashing', () => {
    shallow(<Login />)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Login />)
    const title = <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the login form', () => {
    const wrapper = shallow(<Login />)
    const loginForm = <LoginForm />
    expect(wrapper.contains(loginForm)).toEqual(true)
  })

  it('should render the login image', () => {
    const wrapper = shallow(<Login />)
    const image = <div className="hidden md:block md:w-1/2 rounded-r-lg bg-cover bg-center" style={{ backgroundImage: `url(${login})` }} />
    expect(wrapper.contains(image)).toEqual(true)
  })
})
