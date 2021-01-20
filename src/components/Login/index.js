import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

import style from './style.module.css'

import PasswordLost from './PasswordLost'
import LoginForm from './Form'
import LoginCreate from './Create'
import PasswordReset from './PasswordReset'

import { UserContext } from '../../contexts/userContext'

const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to="/account" />

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="signup" element={<LoginCreate />} />
      <Route path="lost" element={<PasswordLost />} />
      <Route path="reset" element={<PasswordReset />} />
    </Routes>
  )
}

export default Login
