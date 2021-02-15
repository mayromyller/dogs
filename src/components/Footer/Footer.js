import React from 'react'

import * as S from './Footer.module.css'

import { ReactComponent as Dogs } from '../../assets/dogs-footer.svg'

const Footer = () => {
  return (
    <footer className={S.footer}>
      <Dogs />
      <p>Dogs. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer
