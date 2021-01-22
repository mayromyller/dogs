import React from 'react'

import * as S from './style.module.css'

import Feed from '../Feed'

import HeaderUser from './HeaderUser'
import Photo from './Photo'
import Statistics from './Statistics'

import { Route, Routes } from 'react-router-dom'

const User = () => {
  return (
    <section className="container">
      <HeaderUser />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="photo" element={<Photo />} />
        <Route path="statistics" element={<Statistics />} />
      </Routes>
    </section>
  )
}

export default User
