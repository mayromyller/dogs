import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import useFecth from '../../hooks/useFecth'

import { PHOTO_GET } from '../../api/api'

import Error from '../../helpers/Error'
import Loading from '../../helpers/Loading/Loading'

import PhotoContent from '../Feed/Modal/PhotoContent/PhotoContent'

const PhotoViewer = () => {
  const { id } = useParams()
  const { data, loading, error, request } = useFecth()

  useEffect(() => {
    const { url, options } = PHOTO_GET(id)
    request(url, options)
  }, [request, id])
  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} />
      </section>
    )
  else return null
}

export default PhotoViewer
