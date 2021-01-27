import React, { useEffect } from 'react'
import * as S from './style.module.css'

import PhotoItem from '../PhotoItem'

import useFecth from '../../../hooks/useFecth'

import { PHOTOS_GET } from '../../../api/api'

import Error from '../../../helpers/Error'
import Loading from '../../../helpers/Loading'

const PhotoFeed = ({ setModal }) => {
  const { data, loading, error, request } = useFecth()

  useEffect(() => {
    async function fetchData() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 20, user: 0 })
      const { json } = await request(url, options)
    }
    fetchData()
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${S.feed} animeLeft`}>
        {data.map((photo) => (
          <PhotoItem setModal={setModal} key={photo.id} photo={photo} />
        ))}
      </ul>
    )
  else return null
}

export default PhotoFeed
