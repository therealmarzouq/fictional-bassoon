import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout, UserNav } from '@components/common'
import Stats from '@components/ui/Stats/Stats'
import ActivityTable from '@components/ui/ActivityTable/ActivityTable'
import { CardStack, Input } from '@components/ui'
import {
  FirstAid,
  Interventions,
  MoneyHouse,
  NewPatient,
} from '@components/icons'
import ChartCard from '@components/ChartCard'
import s from '../styles/Dashboard.module.css'

const stats = [
  {
    id: 0,
    icon: FirstAid,
    text: 'Appointments',
    count: '213',
  },
  {
    id: 1,
    icon: Interventions,
    text: 'New Patients',
    count: '104',
  },
  {
    id: 2,
    icon: NewPatient,
    text: 'Interventions',
    count: '24',
  },
  {
    id: 3,
    icon: MoneyHouse,
    text: 'Clafiya’s Earnings',
    count: '$ 112,174',
  },
]
const chartData = [
  {
    id: 'xc56',
    total: '$ 112,174',
    description: 'Income in current month',
    color: '#336CFB',
    pointer: '#A9C1FD',
    isCurrency: true,
    chartData: [
      { date: '1 June', value: '42000' },
      { date: '8 July', value: '110000' },
      { date: '16 Augt', value: '31000' },
      { date: '24 Sept', value: '61000' },
      { date: '15 Oct', value: '41000' },
    ],
  },
  {
    id: 'dc56',
    total: '5,210',
    description: 'Total Number of Appointment',
    color: '#FAC032',
    pointer: '#FCDF98',
    isCurrency: false,
    chartData: [
      { date: '25 Apri', value: '3100' },
      { date: '26 May', value: '1800' },
      { date: '27 June', value: '2900' },
      { date: '28 July', value: '2050' },
      { date: '15 Oct', value: '2750' },
    ],
  },
]
export default function Home() {
  return (
    <>
      <div className="">
        <div className={s['dashboard-actions']}>
          <Input type="" placeholder="Search" />
          <UserNav />
        </div>
        <CardStack>
          {stats.map((stat) => (
            <Stats stat={stat} key={stat.id} />
          ))}
        </CardStack>
        <CardStack>
          {chartData.map((data) => (
            <ChartCard data={data} key={data.id} />
          ))}
        </CardStack>
        <CardStack>
          <ActivityTable />
        </CardStack>
      </div>
    </>
  )
}

Home.Layout = Layout
