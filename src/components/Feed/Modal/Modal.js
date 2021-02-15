import React, { useEffect } from 'react'
import * as S from './Modal.module.css'

import useFecth from '../../../hooks/useFecth'

import { PHOTO_GET } from '../../../api/api'

import Error from '../../../helpers/Error'
import Loading from '../../../helpers/Loading/Loading'

import PhotoContent from './PhotoContent/PhotoContent'

const Modal = ({ photo, setModal }) => {
  const { data, loading, error, request } = useFecth()

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  const handleOutsideModal = (event) => {
    if (event.target === event.currentTarget) setModal(null)
  }

  return (
    <div className={S.modal} onClick={handleOutsideModal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default Modal
