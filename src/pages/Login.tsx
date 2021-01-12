import React from 'react'
import LoginForm from '../components/LoginForm'

const Login: React.FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-r from-white to-gray-500 h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2
                     bg-white sm:mx-0"
          style={{ height: '500px' }}
        >
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
              <div className="w-full mt-4">
                <LoginForm />
              </div>
            </div>
          </div>
          <div
            className="hidden md:block md:w-1/2 rounded-r-lg bg-cover bg-center"
            style={{ backgroundImage: 'url(https://i.postimg.cc/dthFx52d/login.jpg)' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
