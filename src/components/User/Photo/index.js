import React, { useState, useEffect } from 'react'

import * as S from './style.module.css'

import Input from '../../Input'
import Button from '../../Button'

import useForm from '../../../hooks/useForm'
import useFecth from '../../../hooks/useFecth'

import { PHOTO_POST } from '../../../api/api'

import Error from '../../../helpers/Error'

import { useNavigate } from 'react-router-dom'

const Photo = () => {
  const name = useForm()
  const age = useForm()
  const weight = useForm()
  const [img, setImg] = useState({})
  const navigate = useNavigate()

  const { data, loading, error, request } = useFecth()

  useEffect(() => {
    if (data) navigate('/account')
  }, [data, navigate])

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('age', age.value)
    formData.append('weight', weight.value)
    formData.append('img', img.raw)

    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)
  }

  const handleChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }

  return (
    <section className={`${S.photo} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...name} />
        <Input label="Idade" type="number" name="age" {...age} />
        <Input label="Peso" type="number" name="weight" {...weight} />
        <input
          className={S.files}
          type="file"
          name="files"
          id="img"
          onChange={handleChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enivar</Button>
        )}

        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={S.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  )
}

export default Photo
