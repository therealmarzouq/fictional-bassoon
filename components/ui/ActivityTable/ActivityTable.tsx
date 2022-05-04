import React, { FC } from 'react'
import Image from 'next/image'
import s from './ActivityTable.module.css'
import Link from 'next/link'
import { Delete, Edit } from '@components/icons'

interface ActivityTableProps {
  children?: any
  onClose?: () => void
}

const tableData = [
  {
    id: 0,
    name: 'Babaginda Fox',
    email: 'babgindafox@example.com',
    date: '10/10/2020',
    visitTime: '09:15-09:45am',
    chws: 'Blessing Chidi',
    plana: 'BASIC',
    profileAvatar: '/assets/avatars/Ed.png',
  },
  {
    id: 1,
    name: 'Jennie Johnson',
    email: 'jenniejohnson@example.com',
    date: '10/12/2020',
    visitTime: '12:00-12:45pm',
    chws: 'Esther Lucky',
    plana: 'FAMILY',
    profileAvatar: '/assets/avatars/01.png',
  },
  {
    id: 2,
    name: 'Lucky Williams',
    email: 'luckywilliam@example.com',
    date: '10/13/2020',
    visitTime: '01:15-01:45pm',
    chws: 'Blessing Chidi',
    plana: 'BASIC',
    profileAvatar: '/assets/avatars/04.png',
  },
  {
    id: 3,
    name: 'Blessing Wilsom',
    email: 'blessingwilliam@gmail.com',
    date: '10/14/2020',
    visitTime: '02:00-02:45pm',
    chws: 'Esther Lucky',
    plana: 'FAMILY',
    profileAvatar: '/assets/avatars/02.png',
  },
  {
    id: 4,
    name: 'Purest Meion',
    email: 'purestmeion@example.com',
    date: '10/15/2020',
    visitTime: '12:00-12:45pm',
    chws: 'Blessing Chidi',
    plana: 'BASIC',
    profileAvatar: '/assets/avatars/03.png',
  },
]

const ActivityTable: FC<ActivityTableProps> = () => {
  return (
    <div className={s.root}>
      <div className={s['table__title']}>Appointment Activity</div>
      <div className={s['table__wrapper']}>
        <table className={s['table']}>
          <thead className={s['table__head']}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Visit Time</th>
              <th>CHWs</th>
              <th>Plana</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={s['table__body']}>
            {tableData.map((data) => (
              <tr key={data.id}>
                <td className={s['table__cell']}>
                  <div className={s['table__cell-with-image']}>
                    <Image
                      className={s['table__cell-image']}
                      src={data.profileAvatar}
                      alt="Picture of the author"
                      layout="fixed"
                      width={32}
                      height={32}
                    />
                    <span className={s['table__cell-content']}>
                      {data.name}
                    </span>
                  </div>
                </td>
                <td className={s['table__cell']}>{data.email}</td>
                <td className={s['table__cell']}>{data.date}</td>
                <td className={s['table__cell']}>{data.visitTime}</td>
                <td className={s['table__cell']}>{data.chws}</td>
                <td className={s['table__cell']}>{data.plana}</td>
                <td className={s['table__cell']}>
                  <div className={s['table__actions']}>
                    <Link href="#">
                      <a className={s['table__action--item']}>
                        <Edit />
                      </a>
                    </Link>
                    <Link href="#">
                      <a className={s['table__action--item']}>
                        <Delete />
                      </a>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ActivityTable
