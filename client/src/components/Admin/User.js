import React from 'react'
import { MdDelete } from "react-icons/md";

function User() {
  return (
    <div>
      <div className="flex flex-col pt-20">
        <div className='flex bg-gray-200 font-bold text-2xl'>
          <h1 className='w-44 ps-5'>Id</h1>
          <h1 className='w-72 ps-5'>Name</h1>
          <h1 className='w-80 ps-5'>Email</h1>
          <h1 className='ps-5 w-64'>Phone Number</h1>
          <h1 className='w-32 ps-5'>Block</h1>
          <h1 className=''>Delete</h1>
        </div>
        <div className='flex text-xl font-semibold border-b-2 py-2 text-gray-800 bg-gray-50'>
          <h1 className='w-44 ps-5 overflow-x-hidden'>1</h1>
          <h1 className='w-72 ps-5 overflow-x-hidden'>User</h1>
          <h1 className='w-80 overflow-x-hidden ps-5'>user@gmail.com</h1>
          <h1 className='ps-5 w overflow-x-hidden w-64'>0123456789</h1>
          <h1 className='w-32 ps-5'>Block</h1>
          <MdDelete className='text-3xl ms-5'/>
        </div>
      </div>
    </div>
  )
}

export default User