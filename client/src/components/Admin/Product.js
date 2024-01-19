import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";

function Product() {
  return (
    <div className='pt-20 px-5 bg-gray-100'>
      <h1 className='my-8 text-4xl font-bold'>Product</h1>
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-3 mb-10'>
          <img src={require("../../image/banner.png")} alt="" className='rounded-t-md h-72' />
          <div className='p-5 bg-white rounded-b-md'>
            <h1 className='font-bold text-3xl pb-1'>Men's Jacket</h1>
            <h1 className='text-gray-500 pb-1'>Cotten Blend Men's Blue Jacket</h1>
            <div className='flex items-center text-blue-500'>
              <FaIndianRupeeSign />
              <h1 className=' text-xl'>450.00</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product