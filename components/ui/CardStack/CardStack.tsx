import React, { FC } from 'react'
import s from './CardStack.module.css'

interface CardStackProps {
  children: React.ReactNode | any
}

const CardStack: FC<CardStackProps> = ({ children }) => {
  return <div className={s.root}>{children}</div>
}

export default CardStack
