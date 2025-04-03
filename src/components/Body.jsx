import React from 'react'
import Sidebar from './Sidebar'
import { Outlet  } from "react-router";
import Header from './Header';


const Body = () => {
  return (
    <div className='w-full'>
        <Header />
        <div className='flex flex-row'>
        <Sidebar />
        <Outlet />
        </div>
    </div>
  )
}

export default Body