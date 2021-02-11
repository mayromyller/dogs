import React, { useState, useEffect } from 'react'

import Input from '../../Input'
import Button from '../../Button'

import Error from '../../../helpers/Error'

import useForm from '../../../hooks/useForm'
import useFecth from '../../../hooks/useFecth'

import { PASSWORD_RESET } from '../../../api/api'

import { useNavigate } from 'react-router-dom'

const PasswordReset = () => {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')

  const password = useForm()
  const { loading, error, request } = useFecth()

  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  const handleSubmit = async (event) => {
    if (password.validate()) {
      event.preventDefault()

      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })

      const { response } = await request(url, options)
      if (response.ok) navigate('/login')
    }
  }

  return (
    <div>
      <h1 className="title">Alterar senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? <Button>Enviando...</Button> : <Button>Enviar</Button>}
      </form>
      <Error error={error} />
    </div>
  )
}

export default PasswordReset
