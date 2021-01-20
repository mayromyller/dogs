import React from 'react'
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE } from '../api/api'

import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const navigate = useNavigate()

  const getUser = async (token) => {
    const { url, options } = GET_USER(token)
    const response = await fetch(url, options)
    const json = await response.json()

    setData(json)
    setLogin(true)
  }

  const userLogin = async (username, password) => {
    try {
      setError(null)
      setLoading(true)

      const { url, options } = TOKEN_POST({ username, password })
      const response = await fetch(url, options)

      if (!response.ok) throw new Error(`Erro: ${response.statusText}`)

      const { token } = await response.json()
      window.localStorage.setItem('token', token)

      await getUser(token)
      navigate('/account')
    } catch (err) {
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  const userLogout = React.useCallback(async () => {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)

    window.localStorage.removeItem('token')
    navigate('/login')
  }, [navigate])

  React.useEffect(() => {
    const automaticLogin = async () => {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          setError(false)
          setLoading(true)

          const { url, options } = TOKEN_VALIDATE(token)
          const reponse = await fetch(url, options)
          if (!reponse.ok) throw new Error('Token inválido')

          await getUser(token)
        } catch (err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      }
    }
    automaticLogin()
  }, [userLogout])

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  )
}
