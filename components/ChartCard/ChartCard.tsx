import { LineChart } from '@components/ui'
import React from 'react'
import s from './ChartCard.module.css'

const ChartCard = ({ ...props }) => {
  const { data } = props
  return (
    <div className={s['chart-card']}>
      <div className={s['chart-card__header']}>
        <h1 className={s.total}>{data.total}</h1>
        <p className={s.desc}>{data.description}</p>
      </div>
      <div className={s['chart-container']}>
        <LineChart
          chartData={data.chartData}
          color={data.color}
          isCurrency={data.isCurrency}
          pointer={data.pointer}
        />
      </div>
    </div>
  )
}
export default ChartCard
