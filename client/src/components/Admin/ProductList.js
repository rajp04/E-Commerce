import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";

function ProductList() {
  return (
    <div className='pt-20 px-5 bg-gray-100'>
      <h1 className='my-8 text-4xl font-bold'>Add Product</h1>
      <div className='grid grid-cols-10 border-2 bg-gray-200 rounded-t-md py-1'>
        <h1 className='col-span-2 text-xl font-medium text-center'>Image</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Details</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Amount</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Stock</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Action</h1>
      </div>
      <div className='grid grid-cols-10 border-2 bg-white rounded-b-md py-1'>
        <div className='col-span-2 flex justify-center'>
          <img src={require('../../image/home.png')} alt="" />
        </div>
        <div className='col-span-2 flex flex-col items-center justify-center'>
          <h1 className='font-medium text-xl'>Black Shirt</h1>
          <p>vida Loca - Gray check</p>
        </div>
        <div className='flex items-center col-span-2 justify-center'>
          <FaIndianRupeeSign />
          <h1>1220</h1>
        </div>
        <div className='col-span-2 flex justify-center items-center text-xl text-green-500'>
          In Stock
        </div>
        <div className='col-span-2 flex justify-center items-center space-x-2'>
          <button className='bg-blue-600 text-white rounded-md px-4 py-2'>Edit</button>
          <button className='bg-red-500 text-white rounded-md px-4 py-2'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ProductList