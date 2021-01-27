import React, { useState } from 'react'
import * as S from './style.module.css'

import PhotoFeed from './PhotoFeed'
import Modal from './Modal'

const Feed = () => {
  const [modal, setModal] = useState(null)
  return (
    <div>
      {modal && <Modal photo={modal} setModal={setModal} />}
      <PhotoFeed setModal={setModal} />
    </div>
  )
}

export default Feed
