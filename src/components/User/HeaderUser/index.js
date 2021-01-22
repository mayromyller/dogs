import React from 'react'

import * as S from './style.module.css'
import HeaderNavigation from '../HeaderNavigation/index'

import { useLocation } from 'react-router-dom'

const HeaderUser = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    const { pathname } = location
    switch (pathname) {
      case '/account/photo':
        setTitle('Postar nova foto')
        break
      case '/account/statistics':
        setTitle('Estátisticas')
        break
      default:
        setTitle('Minhas postagens')
    }
  }, [location])

  return (
    <header className={S.header}>
      <h1 className="title">{title}</h1>
      <HeaderNavigation />
    </header>
  )
}

export default HeaderUser
