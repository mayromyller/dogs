import React from 'react'

import * as S from './style.module.css'

import { Route, Routes } from 'react-router-dom'

import Feed from '../Feed'
import HeaderUser from './HeaderUser'
import Photo from './Photo'
import Statistics from './Statistics'

import { UserContext } from '../../contexts/userContext'

const User = () => {
  const { data } = React.useContext(UserContext)

  return (
    <section className="container">
      <HeaderUser />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="photo" element={<Photo />} />
        <Route path="statistics" element={<Statistics />} />
      </Routes>
    </section>
  )
}

export default User
