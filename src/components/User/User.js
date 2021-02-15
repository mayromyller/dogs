import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Feed from '../Feed/Feed'
import HeaderUser from './UserHeader/UserHeader'
import Photo from './Photo/Photo'
import Statistics from './Statistics/Statistics'
import NotFound from '../NotFound/NotFound'

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default User
