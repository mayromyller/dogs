import React from 'react'
import * as S from './style.module.css'

const Input = ({ label, type, name, value, onChange, onBlur, error }) => {
  return (
    <div className={S.wrapper}>
      <label htmlFor={name} className={S.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={S.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={S.error}>{error}</p>}
    </div>
  )
}

export default Input
