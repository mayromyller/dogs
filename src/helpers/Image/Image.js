import React, { useState } from 'react'
import * as S from './Image.module.css'

const Image = ({ alt, ...props }) => {
  const [load, setLoad] = useState(true)
  const handleLoad = ({ target }) => {
    target.style.opacity = 1
    setLoad(false)
  }
  return (
    <div className={S.wrapper}>
      {load && <div className={S.skeleton}></div>}
      <img onLoad={handleLoad} className={S.image} alt={alt} {...props} />
    </div>
  )
}

export default Image
