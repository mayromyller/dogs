import React from 'react'
import * as S from './style.module.css'

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={S.button}>
      {children}
    </button>
  )
}

export default Button
