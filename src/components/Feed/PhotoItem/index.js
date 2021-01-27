import React from 'react'
import * as S from './style.module.css'

const PhotoItem = ({ photo, setModal }) => {
  const handleClick = () => {
    setModal(photo)
  }
  return (
    <li className={S.photoItem} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={S.view}>{photo.hits}</span>
    </li>
  )
}

export default PhotoItem
