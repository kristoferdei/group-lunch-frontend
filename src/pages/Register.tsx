import React from 'react'
import RegisterForm from '../components/RegisterForm'

const Register: React.FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-r from-white to-gray-500 h-screen w-screen flex flex-col">
      <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="overflow-y-auto bg-white px-6 py-8 rounded-lg shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center text-gray-900">Sign Up</h1>
          <RegisterForm />
          <div className="text-gray-700 mt-6 text-center">
            Already have an account?
            <a
              className="no-underline border-b border-blue-500
                            hover:border-blue-700 text-blue-500 hover:text-blue-700 ml-2"
              href="/"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
