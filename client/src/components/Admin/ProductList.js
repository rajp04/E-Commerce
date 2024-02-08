/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { ProductData } from '../../thunks/ProductThunk';
import axios from 'axios';

function ProductList() {
  const navigate = useNavigate()
  const [referesh, setReferesh] = useState()
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product.productData)
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(ProductData())
  }, [dispatch, referesh])

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5555/api/v1/product/deleteproduct/${id}`);

      if (response.status == 200) {
        console.log('Product deleted successfully');
        setReferesh(Math.random())
      } else {
        console.error('Failed to delete product. Server responded with:', response.data);
      }
    } catch (error) {
      console.error('An error occurred while deleting the product:', error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='pt-20 px-5 bg-gray-100 pb-10'>
      <h1 className='my-8 text-4xl font-bold'>Product List</h1>
      <div className='grid grid-cols-10 border-2 bg-gray-200 rounded-t-md py-1'>
        <h1 className='col-span-2 text-xl font-medium text-center'>Image</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Details</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Amount</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Stock</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Action</h1>
      </div>
      {productData && productData.result.map(product => (
        <div key={product._id} className='grid grid-cols-10 border-2 bg-white rounded-b-md py-1'>
          <div className='col-span-2 flex justify-center items-center'>
            <img src={product.image} alt="" className='h-20 rounded-xl' />
          </div>
          <div className='col-span-2 flex flex-col items-center justify-center'>
            <h1 className='font-medium text-xl '>{product.productName}</h1>
            <p className='overflow-hidden w-64 whitespace-nowrap text-ellipsis'>{product.description}</p>
          </div>
          <div className='flex items-center col-span-2 justify-center'>
            <FaIndianRupeeSign />
            <h1>{product.price}</h1>
          </div>
          <div className='col-span-2 flex justify-center items-center text-xl text-green-500'>
            In Stock({product.stock})
          </div>
          <div className='col-span-2 flex justify-center items-center space-x-2'>
            <button className='bg-blue-600 text-white rounded-md px-4 py-2' onClick={() => navigate('/admin/editproduct', { state: product })} > Edit </button>
            <button className='bg-red-500 text-white rounded-md px-4 py-2' onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        </div>
      ))
      }
    </div >
  )
}

export default ProductList