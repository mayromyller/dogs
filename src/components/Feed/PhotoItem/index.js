import React from 'react'
import * as S from './style.module.css'

const PhotoItem = ({ photo }) => {
  return (
    <li className={S.photoItem}>
      <img src={photo.src} alt={photo.title} />
      <span className={S.view}>{photo.hits}</span>
    </li>
  )
}

export default PhotoItem
