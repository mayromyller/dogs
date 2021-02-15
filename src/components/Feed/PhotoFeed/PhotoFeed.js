import React, { useEffect } from 'react'
import * as S from './PhotoFeed.module.css'

import PhotoItem from '../PhotoItem/PhotoItem'

import useFecth from '../../../hooks/useFecth'

import { PHOTOS_GET } from '../../../api/api'

import Error from '../../../helpers/Error'

const PhotoFeed = ({ page, user, setModal, setInfinite, photo }) => {
  const { data, error, request } = useFecth()

  useEffect(() => {
    async function fetchData() {
      const total = 6
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options)

      if (response && response.ok && json.length < total) {
        setInfinite(false)
      }
    }
    fetchData()
  }, [request, user, page, setInfinite, photo])

  if (error) return <Error error={error} />
  if (data)
    return (
      <ul className={`${S.feed} animeLeft`}>
        {data.map((photoItem) => (
          <PhotoItem setModal={setModal} key={photoItem.id} photo={photoItem} />
        ))}
      </ul>
    )
  else return null
}

export default PhotoFeed
