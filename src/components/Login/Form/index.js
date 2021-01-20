import React from 'react'

import { Link } from 'react-router-dom'

import * as S from './style.module.css'
import * as buttonComponentStyle from '../../Button/style.module.css'

import Input from '../../Input'
import Button from '../../Button'
import useForm from '../../../hooks/useForm'

import Error from '../../../helpers/Error'

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

      <form className={S.form} onSubmit={handleSubmit}>
        <Input label={'Usuário'} type="text" name="username" {...username} />
        <Input label={'Senha'} type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={S.lostPassword} to="/login/lost">
        Perdeu a senha?
      </Link>
      <div className={S.signup}>
        <h2 className={S.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={buttonComponentStyle.button} to="/login/signup">
        Cadastro
      </Link>
    </section>
  )
}

export default LoginForm
