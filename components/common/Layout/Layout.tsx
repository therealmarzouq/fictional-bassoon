import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import s from './Layout.module.css'
import Sidebar from '../Sidebar'

// const Loading = () => (
//   <div className="w-80 h-80 flex items-center text-center justify-center p-3">
//     <LoadingDots />
//   </div>
// );
interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.root}>
      <Sidebar />
      <main className={s.main}>{children}</main>
    </div>
  )
}

export default Layout
