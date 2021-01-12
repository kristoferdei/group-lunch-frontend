import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { onRegister } from '../api/auth.api'
import { useNavigation } from 'react-navi'

type Inputs = {
  username: string
  name: string
  email: string
  password: string
  password2: string
}

const RegisterForm: React.FunctionComponent = () => {
  const navigation = useNavigation()
  const [{ username, fullName, email, password }, setRegisterData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
  })

  const { register, handleSubmit, errors, watch } = useForm<Inputs>()
  const onSubmit: (data: Inputs) => void = (data: Inputs) => {
    console.log('data', data)
    onRegister({
      username,
      fullName,
      email,
      password,
    }).then(() => {
      console.log('ok')
    })
    navigation.navigate('/').then(() => {
      console.log('ok')
    })
  }

  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisibility: () => void = () => {
    setPasswordShown(!passwordShown)
  }

  const [passwordShown2, setPasswordShown2] = useState(false)
  const togglePasswordVisibility2: () => void = () => {
    setPasswordShown2(!passwordShown2)
  }

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="username" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2">
            Username
          </label>
          <input
            value={username}
            onChange={(event): void =>
              setRegisterData({
                username: event.target.value,
                fullName,
                email,
                password,
              })
            }
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            ref={register({ required: true, minLength: 5 })}
          />
          {errors.username && errors.username.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium"
            >
              You must enter your username.
            </label>
          )}
          {errors.username && errors.username.type === 'minLength' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium"
            >
              Must be at least 5 characters long!
            </label>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="fullName" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2">
            Full Name
          </label>
          <input
            value={fullName}
            onChange={(event): void =>
              setRegisterData({
                username,
                fullName: event.target.value,
                email,
                password,
              })
            }
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            ref={register({ required: true, minLength: 5 })}
          />
          {errors.name && errors.name.type === 'required' && (
            <label
              className="error lock tracking-wide text-red-700
                        text-xs font-medium"
            >
              You must enter your name.
            </label>
          )}
          {errors.name && errors.name.type === 'minLength' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium"
            >
              Must be at least 5 characters long!
            </label>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2">
            E-mail
          </label>
          <input
            value={email}
            onChange={(event): void =>
              setRegisterData({
                username,
                fullName,
                email: event.target.value,
                password,
              })
            }
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            ref={register({ required: true })}
          />
          {errors.email && errors.email.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium"
            >
              You must enter your email address.
            </label>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="relative passWord w-full px-3">
          <label htmlFor="password" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <input
              value={password}
              onChange={(event): void =>
                setRegisterData({
                  username,
                  fullName,
                  email,
                  password: event.target.value,
                })
              }
              className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
              type={passwordShown ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
              ref={register({ required: true, minLength: 8 })}
            />
            <i onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5 text-gray-600">
              <FontAwesomeIcon onClick={togglePasswordVisibility} icon={passwordShown ? faEyeSlash : faEye} />
            </i>
          </div>
          {errors.password && errors.password.type === 'required' && (
            <label
              className="error block text-red-700
                        text-xs font-medium"
            >
              You must enter your password.
            </label>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium"
            >
              Must be at least 8 characters long!
            </label>
          )}
          <div className="relative">
            <input
              className="mt-3 appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
              type={passwordShown2 ? 'text' : 'password'}
              id="password2"
              name="password2"
              placeholder="Password confirmation"
              ref={register({
                required: true,
                validate: (value) => {
                  return value === watch('password')
                },
              })}
            />
            <i onClick={togglePasswordVisibility2} className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5 text-gray-600">
              <FontAwesomeIcon onClick={togglePasswordVisibility2} icon={passwordShown2 ? faEyeSlash : faEye} />
            </i>
          </div>
          {errors.password2 && errors.password2.type === 'required' && (
            <label
              className="error block text-red-700
                        text-xs font-medium"
            >
              You must re-enter your password.
            </label>
          )}
          {errors.password2 && errors.password2.type === 'validate' && (
            <label
              className="error block text-red-700
                        text-xs font-medium"
            >
              The passwords do not match.
            </label>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full text-center py-3 rounded bg-gray-700 text-white border border-gray-700
                            hover:bg-transparent hover:border-gray-700 hover:text-gray-900 focus:outline-none"
      >
        Create Account
      </button>
    </form>
  )
}

export default RegisterForm
