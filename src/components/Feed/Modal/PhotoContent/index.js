import React, { useContext } from 'react'
import * as S from './style.module.css'

import { Link } from 'react-router-dom'

import PhotoComments from '../PhotoComments'
import PhotoDelete from '../PhotoDelete'

import { UserContext } from '../../../../contexts/userContext'

import Image from '../../../../helpers/Image/Image'

const PhotoContent = ({ data }) => {
  const user = useContext(UserContext)
  const { comments, photo } = data

  return (
    <div className={S.photo}>
      <div className={S.image}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={S.details}>
        <div>
          <p className={S.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={S.views}>{photo.hits}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={S.attributes}>
            <li>{photo.weight} kg</li>
            <li>{photo.age} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  )
}

export default PhotoContent
