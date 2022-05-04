import s from './Input.module.css'
import React, { InputHTMLAttributes } from 'react'
import { Search } from '@components/icons'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onChange?: (...args: any[]) => any
}

const Input: React.FC<InputProps> = (props) => {
  const { className, children, onChange, ...rest } = props

  const rootClassName = (s.root, {}, className)

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <label className={s.label}>
      <Search className={s['icon--before']} />
      <input
        className={s.root}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  )
}

export default Input
