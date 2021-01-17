import React from 'react'

import { Route, Routes } from 'react-router-dom'

import style from './style.module.css'

import PasswordLost from './PasswordLost'
import LoginForm from './Form'
import LoginCreate from './Create'
import PasswordReset from './PasswordReset'

const Login = () => {
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
