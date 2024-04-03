import React, { useEffect, useState } from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import { useNavigate } from 'react-router-dom'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import axios from 'axios'

function Order() {
    const navigate = useNavigate()
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState([]);
    const [data, setData] = useState([]);

    const user = localStorage.getItem('id');

    useEffect(() => {
        if (!user) {
            return navigate('/login');
        }
    },);

    useEffect(() => {
        const getOrder = async () => {
            try {
                const result = await axios.get(`http://localhost:5555/api/v1/order/getorderdata/${user}`);
                setOrder(result.data.result);
            } catch (error) {
                console.error("Error fetching order data:", error);
            }
        };
        getOrder();
    }, [user]);

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
    }, [user]);

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


    // console.log(data, "abc");

    return (
        <>
            <Header />
            <div className='py-5 px-5 bg-gray-100'>
                <h1 className='text-4xl font-bold pb-5'>Order History</h1>
                <div className='grid grid-cols-12 bg-gray-200 rounded-t-md py-1'>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Product Image</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Product Name</h1>
                    <h1 className='col-span-1 text-xl font-medium text-center'>Size</h1>
                    <h1 className='col-span-1 text-xl font-medium text-center'>Units</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Price</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Date</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Status</h1>
                </div>
                {data && data.map((item) => {
                    const p = item.product
                    const o = item.order
                    return (
                        <div className='grid grid-cols-12 border-2 bg-white rounded-b-md py-1'>
                            <div className='flex justify-center items-center col-span-2'>
                                <img src={p.image} alt="" className='h-24 p-2' />
                            </div>
                            <h1 className='col-span-2 flex justify-center items-center text-xl font-medium whitespace-pre-wrap'>{p.productName}</h1>
                            <h1 className='col-span-1 flex justify-center items-center text-3xl font-medium'>{p.size}</h1>
                            <h1 className='col-span-1 flex justify-center items-center text-3xl font-medium'>{p.qty}</h1>
                            <div className='col-span-2 flex items-center justify-center text-3xl font-medium'>
                                <FaIndianRupeeSign />
                                <h1 className='pb-2'>{p.price}</h1>
                            </div>
                            <div className='col-span-2 flex items-center justify-center text-3xl font-medium'>{new Date(o.updatedAt).toLocaleDateString('en-GB')}</div>
                            <div className='col-span-2 flex items-center justify-center text-3xl font-medium'>{o.status}</div>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </>
    )
}

export default Order