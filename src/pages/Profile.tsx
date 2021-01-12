import React from 'react'
import User from '../components/User'

const Login: React.FunctionComponent = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-white to-gray-500">
      <User />
    </div>
  )
}

export default Login
