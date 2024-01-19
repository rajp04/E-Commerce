import React from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6'

function OrderHistory() {
  return (
    <div className='pt-20 px-5 bg-gray-100'>
      <h1 className='my-8 text-4xl font-bold'>Order History</h1>
      <div className='grid grid-cols-12 bg-gray-200 rounded-t-md py-1'>
        <h1 className='col-span-2 text-xl font-medium text-center'>Product Id</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Product Name</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Product Image</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Size</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Units</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Price</h1>
      </div>
      <div className='grid grid-cols-12 border-2 bg-white rounded-b-md py-1'>
        <h1 className='col-span-2 text-center'>5968</h1>
        <h1 className='col-span-2 text-center'>Men Wear</h1>
        <div className='flex justify-center items-center col-span-2'>
          <img src={require("../../image/home.png")} alt="" />
        </div>
        <h1 className='col-span-2 text-center'>M</h1>
        <h1 className='col-span-2 text-center'>5</h1>
        <div className='flex items-center justify-center'>
          <FaIndianRupeeSign />
          <h1>120</h1>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory