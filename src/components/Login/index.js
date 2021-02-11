import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

import * as S from './style.module.css'

import PasswordLost from './PasswordLost'
import LoginForm from './Form'
import LoginCreate from './Create'
import PasswordReset from './PasswordReset'
import NotFound from '../NotFound'

import { UserContext } from '../../contexts/userContext'

const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to="/account" />

  return (
    <section className={S.login}>
      <div className={S.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="signup" element={<LoginCreate />} />
          <Route path="lost" element={<PasswordLost />} />
          <Route path="reset" element={<PasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
