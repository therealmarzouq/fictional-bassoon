import React, { FC } from 'react'
import s from './Stats.module.css'

interface StatsProps {
  stat: Object | any
}

const Stats: FC<StatsProps> = ({ ...props }) => {
  const { stat } = props
  const { icon, text, count } = stat
  return (
    <div className={s['stat__item'] + ' card-shadow'}>
      <div className={s['stat__content']}>
        <div>{icon && <stat.icon className={s['stat__icon']} />}</div>
        <div className={s['stat__content-wrapper']}>
          <span className={s['stat__text']}>{text}</span>
          <span className={s['stat__count']}>{count}</span>
        </div>
      </div>
    </div>
  )
}

export default Stats
