import React, { FormEvent, useState } from 'react'
import { onLogin } from '../api/auth.api'
import { useNavigation } from 'react-navi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const LoginForm: React.FunctionComponent = () => {
  const navigation = useNavigation()
  const [{ username, fullName, email, password }, setCredentials] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState('')

  const login = async (event: FormEvent): Promise<any> => {
    event.preventDefault()
    const { error, accessToken } = await onLogin({
      username,
      fullName,
      email,
      password,
    })

    if (error) {
      setError(error)
    } else {
      await navigation.setContext({ accessToken })
      await navigation.navigate('/')
    }
  }

  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisibility: () => void = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <form className="form-horizontal w-3/4 mx-auto" onSubmit={login}>
      <div className="flex flex-col mt-4">
        <label htmlFor="username" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2">
          Username
        </label>
        <input
          value={username}
          onChange={(event): void => setCredentials({ username: event.target.value, fullName, email, password })}
          type="text"
          className="flex-grow h-10 px-2 border rounded border-grey-400 focus:border-gray-700
                       focus:outline-none"
          placeholder="Username"
        />
      </div>
      <div className="relative flex flex-col mt-4">
        <label htmlFor="password" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2">
          Password
        </label>
        <input
          value={password}
          onChange={(event): void => setCredentials({ username, fullName, email, password: event.target.value })}
          type={passwordShown ? 'text' : 'password'}
          className="flex-grow h-10 px-2 rounded border border-grey-400 focus:border-gray-700
                       focus:outline-none"
          placeholder="Password"
        />
        <i onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-5 pt-10 text-sm leading-5 text-gray-600">
          <FontAwesomeIcon onClick={togglePasswordVisibility} icon={passwordShown ? faEyeSlash : faEye} />
        </i>
      </div>
      <div className="flex flex-col mt-8">
        <button
          className="bg-gray-700 border border-gray-700 text-lg text-white
                        hover:text-gray-900 hover:border-gray-700 hover:bg-transparent font-medium py-2 px-4 rounded focus:outline-none"
        >
          Login
        </button>
        <a
          className="text-center mt-4 border border-gray-700 bg-transparent hover:bg-gray-700
                              text-lg text-gray-900 hover:text-white font-medium py-2 px-4 rounded focus:outline-none"
          href="/register"
        >
          Sign Up
        </a>
      </div>
      {error.length > 0 && (
        <label
          className="error block tracking-wide text-red-700
                        text-sm font-medium pt-8 text-center"
        >
          Invalid username or password
        </label>
      )}
    </form>
  )
}

export default LoginForm
