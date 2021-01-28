import React, { useState } from 'react'
import * as S from './style.module.css'

import { ReactComponent as SendComment } from '../../../../assets/enviar.svg'

import useFecth from '../../../../hooks/useFecth'

import { COMMENT_POST } from '../../../../api/api'

import Error from '../../../../helpers/Error'

const FormComment = ({ id, setComments }) => {
  const [comment, setComment] = useState('')
  const { request, error } = useFecth()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <div>
      <form className={S.form} onSubmit={handleSubmit}>
        <textarea
          className={S.textarea}
          id="comment"
          name="comment"
          placeholder="Faça um comentário.."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <button className={S.button}>
          <SendComment />
        </button>
        <Error error={error} />
      </form>
    </div>
  )
}

export default FormComment
