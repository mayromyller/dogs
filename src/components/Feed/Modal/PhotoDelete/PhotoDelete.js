import React from 'react'

import * as S from './PhotoDelete.module.css'

import { PHOTO_DELETE } from '../../../../api/api'
import useFecth from '../../../../hooks/useFecth'

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFecth()

  const handleClick = async () => {
    const confirm = window.confirm('Quer mesmo deletar essa foto?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={S.photo_delete}>
          deletar
        </button>
      ) : (
        <button onClick={handleClick} className={S.photo_delete}>
          deletar
        </button>
      )}
    </>
  )
}

export default PhotoDelete
