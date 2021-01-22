import React from 'react'
import { NavLink } from 'react-router-dom'

import * as S from './style.module.css'

import { UserContext } from '../../../contexts/userContext'

import { ReactComponent as Feed } from '../../../assets/feed.svg'
import { ReactComponent as Statistics } from '../../../assets/estatisticas.svg'
import { ReactComponent as Photo } from '../../../assets/adicionar.svg'
import { ReactComponent as Logout } from '../../../assets/sair.svg'

const HeaderNavigation = () => {
  const [mobile, setMobile] = React.useState(null)

  const { userLogout } = React.useContext(UserContext)

  return (
    <nav className={S.header_navigation}>
      <NavLink to="/account" end activeClassName={S.active}>
        <Feed />
        {mobile && 'Minhas postagens'}
      </NavLink>

      <NavLink to="/account/statistics" activeClassName={S.active}>
        <Statistics />
        {mobile && 'Estátisticas da conta'}
      </NavLink>

      <NavLink to="/account/photo" activeClassName={S.active}>
        <Photo />
        {mobile && 'Adicionar uma nova Foto'}
      </NavLink>

      <button onClick={userLogout}>
        <Logout />
        {mobile && 'Sair'}
      </button>
    </nav>
  )
}

export default HeaderNavigation
