import { mount, route } from 'navi'
import Login from './pages/Login'
import Register from './pages/Register'
import React from 'react'
import Main from './pages/Main'
import Profile from './pages/Profile'
import { withAuthentication } from './api/auth/authenticatedRoute'

const App = mount({
  '/': withAuthentication(
    route({
      title: 'Main',
      view: <Main />,
    })
  ),
  '/register': route({
    title: 'Register',
    view: <Register />,
  }),
  '/login': route({
    title: 'Login',
    view: <Login />,
  }),
  '/profile': route({
    title: 'Profile',
    view: <Profile />,
  }),
})

export default App
