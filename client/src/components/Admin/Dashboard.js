import React, { useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'

function Dashboard() {

  const admin= sessionStorage.getItem("admin")
  const navigate = useNavigate()

 useEffect(()=>{
  if (admin == null) {
    navigate("/admin/login")
  }
 })

  return (
    <div className='flex flex-row relative'>
      <div className='basis-1/6 bg-gray-900 fixed' style={{ height: '100vh' }}>
        <Sidebar />
      </div>
      <div className='basis-5/6 ml-auto'>
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard