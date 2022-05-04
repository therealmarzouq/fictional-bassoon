import {
  Appointment,
  Dashboard,
  Departments,
  HealthWorkers,
  Help,
  Menu,
  Patients,
  Payments,
} from '@components/icons'
import { Logo } from '@components/ui'
import Link from 'next/link'
import React, { FC, useRef, useState } from 'react'
import s from './Sidebar.module.css'

interface SidebarProps {
  children?: any
  onClose?: () => void
}
const links = [
  {
    name: 'Dashboard',
    url: '/',
    icon: Dashboard,
  },
  {
    name: 'Apointments',
    url: '/',
    icon: Appointment,
  },
  {
    name: 'Health Workers',
    url: '/',
    icon: HealthWorkers,
  },
  {
    name: 'Departments',
    url: '/',
    icon: Departments,
  },
  {
    name: 'Patients',
    url: '/',
    icon: Patients,
  },
  {
    name: 'Payments',
    url: '/',
    icon: Payments,
  },
  {
    name: 'Help',
    url: '/',
    icon: Help,
  },
]
const Sidebar: FC<SidebarProps> = () => {
  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const [nav, setNav] = useState(true)

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <div className={s.root}>
      <div className={s['menu__toggle-button-container']}>
        <input
          id="toggle"
          className={s['menu__toggle-input']}
          type="checkbox"
        />
        <label
          htmlFor="toggle"
          onClick={toggleNav}
          style={{ position: 'absolute' }}
        >
          <div className={s['menu__toggle-button']}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
        <div className={s.menu__container}>
          <div className={s.logo}>
            <Logo />
          </div>
          <ul className={s.menu}>
            {[...links].map((page) => (
              <li key={page.name} className={s['menu__item']}>
                <Link href={page.url!}>
                  <a className={s['menu__link']}>
                    {page.icon && <page.icon className={s['menu__icon']} />}
                    {page.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className={s.logo}>
      </div> */}
    </div>
  )
}
export default Sidebar
