import React from 'react'
import * as S from './style.module.css'

import { useParams } from 'react-router-dom'

import Feed from '../../Feed'

const Profile = () => {
  const { user } = useParams()
  return (
    <section className="container mainContainer">
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  )
}

export default Profile
