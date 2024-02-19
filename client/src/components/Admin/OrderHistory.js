import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6'

function OrderHistory() {

  const [order, setOrder] = useState()
  const [product, setProduct] = useState()
  const [data, setData] = useState()
  const [status, setStatus] = useState()

  useEffect(() => {
    const getOrder = async () => {
      try {
        const result = await axios.get(`http://localhost:5555/api/v1/order/getallorderdata`);
        setOrder(result.data.result);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };
    getOrder();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const result = await axios.get(`http://localhost:5555/api/v1/product/product`);
        setProduct(result.data.result);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    getProduct();
  }, []);

  useEffect(() => {
    if (order && product) {
      const filteredData = [];
      order.forEach(orderItem => {
        // Check if productId is an array
        if (Array.isArray(orderItem.productId)) {
          // Iterate over each productId in the array
          orderItem.productId.forEach(productId => {
            // Find matching productItem._id
            const matchingProduct = product.find(productItem => productId === productItem._id);
            if (matchingProduct) {
              filteredData.push({ order: orderItem, product: matchingProduct });
            }
          });
        }
      });
      setData(filteredData);
    }
  }, [order, product]);


  // useEffect(() => {
  const handleStatus = async (id) => {
    try {
      const data = new FormData();
      data.append("status", status);

      console.log(id);
      const result = await axios.patch(`http://localhost:5555/api/v1/order/updatestatus/${id}`, data);
      console.log(result);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };
  //   handleStatus();
  // }, []);


  return (
    <div className='pt-20 px-5 bg-gray-100 pb-20'>
      <h1 className='my-8 text-4xl font-bold '>Order History</h1>
      <div className='grid grid-cols-12 bg-gray-200 rounded-t-md py-1'>
        <h1 className='col-span-2 text-xl font-medium text-center'>Product Image</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Product Id</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>User Id</h1>
        <h1 className='col-span-2 text-xl font-medium text-center'>Product Name</h1>
        <h1 className='col-span-1 text-xl font-medium text-center'>Size</h1>
        <h1 className='col-span-1 text-xl font-medium text-center'>Units</h1>
        <h1 className='col-span-1 text-xl font-medium text-center'>Price</h1>
        <h1 className='col-span-1 text-xl font-medium text-center'>Status</h1>
      </div>
      {data && data.map((item) => {
        const p = item.product
        const o = item.order
        return (
          <div div className='grid grid-cols-12 border-2 bg-white rounded-b-md py-1' >
            <div className='flex justify-center items-center col-span-2'>
              <img src={p.image} alt="" />
            </div>
            <h1 className='col-span-2 flex items-center justify-center me-5 overflow-hidden'>{p._id}</h1>
            <h1 className='col-span-2 flex items-center justify-center me-5 overflow-hidden'>{o._id}</h1>
            <h1 className='col-span-2 flex items-center justify-center'>{p.productName}</h1>
            <h1 className='col-span-1 flex items-center justify-center'>{p.size}</h1>
            <h1 className='col-span-1 flex items-center justify-center'>{p.qty}</h1>
            <div className='col-span-1 flex items-center justify-center'>
              <FaIndianRupeeSign />
              <h1>{p.price}</h1>
            </div>
            <select className='col-span-1' value={status} onChange={e => handleStatus(o._id, e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="Delivery">Delivery</option>
            </select>
          </div>
        )
      })}
    </div >
  )
}

export default OrderHistory