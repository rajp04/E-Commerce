import React, { useEffect } from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { ProductData } from '../../thunks/ProductThunk';

function Product() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productData);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    // Use an immediately-invoked function expression (IIFE) for the async function
    (async () => {
      try {
        await dispatch(ProductData());
      } catch (error) {
        // Handle any errors here if needed
        console.error("Error fetching product data:", error);
      }
    })();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(productData);

  return (
    <div className='pt-20 px-5 bg-gray-100'>
      <h1 className='my-8 text-4xl font-bold'>Product</h1>

      <div className='grid grid-cols-12 gap-5'>
        {productData && productData.result.map(product => (
          <div key={product._id} className='col-span-3 mb-10'>
            <img src={product.image} alt="" className='rounded-t-md h-72' />
            <div className='p-5 bg-white rounded-b-md'>
              <h1 className='font-bold text-3xl pb-1'>{product.productName}</h1>
              <h1 className='text-gray-500 pb-1'>{product.description}</h1>
              <div className='flex items-center text-blue-500'>
                <FaIndianRupeeSign />
                <h1 className='text-xl'>{product.price}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product