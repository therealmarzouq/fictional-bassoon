import { FC } from 'react'
import Link from 'next/link'
import s from './UserNav.module.css'
import { Bell } from '@components/icons'
import Image from 'next/image'

interface Props {
  className?: string
}

const UserNav: FC<Props> = ({ className }) => {
  const notificationCount = 9

  return (
    <nav className={s.root}>
      <Link href="#">
        <a className={s.notification}>
          <Bell />
          {notificationCount > 0 && (
            <span className={s.notification__count}>{notificationCount}</span>
          )}
        </a>
      </Link>
      <div className={s.avatar}>
        <Image
          src="/assets/avatars/circle.png"
          alt="Avatar"
          width={40}
          height={40}
        />
      </div>
    </nav>
  )
}

export default UserNav
