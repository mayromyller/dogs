import React from 'react'

import Input from '../../Input'
import Button from '../../Button'

import { PASSWORD_LOST } from '../../../api/api'

import useForm from '../../../hooks/useForm'
import useFecth from '../../../hooks/useFecth'

import Error from '../../../helpers/Error'

const PasswordLost = () => {
  const login = useForm()
  const { data, error, loading, request } = useFecth()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('lost', 'reset')
      })

      await request(url, options)
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Perdeu a senha? </h1>
      {data ? (
        <p>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usário" name="login" type="text" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  )
}

export default PasswordLost
