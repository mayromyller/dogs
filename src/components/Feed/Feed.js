import React, { useState, useEffect } from 'react'

import Modal from './Modal/Modal'
import PhotoFeed from './PhotoFeed/PhotoFeed'

const Feed = ({ user }) => {
  const [photo, setPhoto] = useState(null)
  const [pages, setPages] = useState([1])
  const [infinite, setInfinite] = useState(true)

  useEffect(() => {
    let wait = false
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)
    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite])

  return (
    <div>
      {photo && <Modal photo={photo} setModal={setPhoto} />}
      {pages.map((page) => (
        <PhotoFeed
          page={page}
          key={page}
          setInfinite={setInfinite}
          user={user}
          photo={photo}
          setModal={setPhoto}
        />
      ))}
    </div>
  )
}

export default Feed
