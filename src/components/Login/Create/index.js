import React from 'react'

// import * as S from './style.module.css'

import Input from '../../Input'
import Button from '../../Button'

import useForm from '../../../hooks/useForm'
import useFecth from '../../../hooks/useFecth'

import Error from '../../../helpers/Error'

import { POST_USER } from '../../../api/api'

import { UserContext } from '../../../contexts/userContext'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const { userLogin } = React.useContext(UserContext)
  const { loading, error, request } = useFecth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { url, options } = POST_USER({
      username: username.value,
      email: email.value,
      password: password.value
    })

    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value)
  }

  return (
    <section>
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button>Cadastrando...</Button>
        ) : (
          <Button>Cadastre-se</Button>
        )}

        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate
