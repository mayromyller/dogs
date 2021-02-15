import React from 'react'
import { Link } from 'react-router-dom'

import style from './Header.module.css'
import { ReactComponent as Dogs } from '../../assets/dogs.svg'
import { UserContext } from '../../contexts/userContext'

const Header = () => {
  const { data } = React.useContext(UserContext)

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link
          className={style.logo}
          to="/"
          aria-label="Dogs - desenho da carinha de um cachorro que é a logo do site"
        >
          <Dogs />
        </Link>
        {data ? (
          <Link className={style.login} to="/account">
            {data.name}
          </Link>
        ) : (
          <Link className={style.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
