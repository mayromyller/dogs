import React from 'react'

import { Link } from 'react-router-dom'

// import * as S from './style.module.css'

import Input from '../../Input'
import Button from '../../Button'
import useForm from '../../../hooks/useForm'

import { UserContext } from '../../../contexts/userContext'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = React.useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <form onSubmit={handleSubmit}>
        <Input label={'Usuário'} type="text" name="username" {...username} />
        <Input label={'Senha'} type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>

      <Link to="/login/signup">Cadastre-se</Link>
    </section>
  )
}

export default LoginForm
