import React from 'react'

import * as S from './PhotoItem.module.css'

import Image from '../../../helpers/Image/Image'

const PhotoItem = ({ photo, setModal }) => {
  const handleClick = () => {
    setModal(photo)
  }
  return (
    <li className={S.photoItem} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={S.view}>{photo.hits}</span>
    </li>
  )
}

export default PhotoItem
