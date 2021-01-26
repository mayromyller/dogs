import React from 'react'
import * as S from './style.module.css'

import PhotoFeed from './PhotoFeed'
import Modal from './Modal'

const Feed = () => {
  return (
    <div>
      <h1 className={S.feed}>Feed</h1>
      <Modal />
      <PhotoFeed />
    </div>
  )
}

export default Feed
