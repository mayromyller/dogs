import React from 'react'
import * as S from './Button.module.css'

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={S.button}>
      {children}
    </button>
  )
}

export default Button
