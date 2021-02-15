import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

import * as S from './Login.module.css'

import PasswordLost from './PasswordLost/PasswordLost'
import LoginForm from './LoginForm/LoginForm'
import LoginCreate from './Create/LoginCreate'
import PasswordReset from './PasswordReset/PasswordReset'
import NotFound from '../NotFound/NotFound'

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
