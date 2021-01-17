import React from 'react'

import { Link } from 'react-router-dom'

import * as S from './style.module.css'

import Input from '../../Input'
import Button from '../../Button'
import useForm from '../../../hooks/useForm'
import { TOKEN_POST, GET_USER } from '../../../api/api'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  React.useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) getUser(token)
  }, [])

  const getUser = async (token) => {
    const { url, options } = GET_USER(token)
    const response = await fetch(url, options)
    const json = await response.json()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value
      })
      const response = await fetch(url, options)
      const json = await response.json()
      window.localStorage.setItem('token', json.token)
      getUser(json.token)
    }
  }

  return (
    <section className={S.form}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input label={'Usuário'} type="text" name="username" {...username} />
        <Input label={'Senha'} type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>

      <Link to="/login/signup">Cadastre-se</Link>
    </section>
  )
}

export default LoginForm
