import React from 'react'
import {ImSearch} from 'react-icons/im'
import {IoIosNotifications} from 'react-icons/io'
import {BiSolidUser} from 'react-icons/bi'

function Header() {
  return (
    <div className='flex justify-between items-center fixed w-5/6 z-50 bg-white shadow-md h-20 px-5'>
    <ImSearch className='text-3xl'/>
    <div className='flex justify-center items-center'>
        <IoIosNotifications className='text-4xl'/>
        <BiSolidUser className='text-4xl'/>
    </div>
</div>
  )
}

export default Header