import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import * as S from './style.module.css'

import { UserContext } from '../../../contexts/userContext'

import { ReactComponent as Feed } from '../../../assets/feed.svg'
import { ReactComponent as Statistics } from '../../../assets/estatisticas.svg'
import { ReactComponent as Photo } from '../../../assets/adicionar.svg'
import { ReactComponent as Logout } from '../../../assets/sair.svg'
import useMedia from '../../../hooks/useMedia'

const HeaderNavigation = () => {
  const mobile = useMedia('(max-width: 40rem)')
  const [menu, setMenu] = useState(false)

  const { userLogout } = React.useContext(UserContext)

  return (
    <>
      {mobile && (
        <button
          className={`${S.mobileMenu} ${menu && S.mobileMenuActive}`}
          aria-label="Menu"
          onClick={() => setMenu(!menu)}
        ></button>
      )}
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
    </>
  )
}

export default HeaderNavigation
