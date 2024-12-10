import React from 'react'
import Header from './Components/header/Header'
import { Outlet } from 'react-router'
import Footer from './Components/footer/Footer'

function Layout() {
  return (
    <div className='p-2 bg-gray-200 '>
        <Header />
        <Outlet />
        <Footer />
      </div>
  )
}

export default Layout;
