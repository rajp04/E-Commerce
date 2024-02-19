import React, { useEffect, useState } from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import { useNavigate } from 'react-router-dom'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import axios from 'axios'

function Order() {
    const navigate = useNavigate()
    const [order, setOrder] = useState([]);
    const [cart, setCart] = useState([]);
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
        const getCart = async () => {
            try {
                const result = await axios.get(`http://localhost:5555/api/v1/cart/getcart/${user}`);
                setCart(result.data.result);
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };
        getCart();
    }, [user]);

    useEffect(() => {
        if (order && cart) {
            const filteredData = [];
            order.forEach(orderItem => {
                cart.forEach(cartItem => {
                    if (orderItem.userId === cartItem.userId) {
                        filteredData.push({ order: orderItem, cart: cartItem });
                    }
                });
            });
            setData(filteredData);
        }
    }, [order, cart]);

    console.log(data, "abc");

    return (
        <>
            <Header />
            <div className='py-5 px-5 bg-gray-100'>
                <h1 className='text-4xl font-bold pb-5'>Order History</h1>
                <div className='grid grid-cols-12 bg-gray-200 rounded-t-md py-1'>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Product Image</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Product Name</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Size</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Units</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Price</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Date</h1>
                </div>
                {data && data.map((item) => {
                    const e = item.cart.productId
                    return (
                        <div className='grid grid-cols-12 border-2 bg-white rounded-b-md py-1'>
                            <div className='flex justify-center items-center col-span-2'>
                                <img src={e.image} alt="" />
                            </div>
                            <h1 className='col-span-2 flex justify-center items-center text-xl font-medium whitespace-pre-wrap'>{e.productName}</h1>
                            <h1 className='col-span-2 flex justify-center items-center text-3xl font-bold'>{e.size}</h1>
                            <h1 className='col-span-2 flex justify-center items-center text-3xl font-bold'>{item.cart.qty}</h1>
                            <div className='col-span-2 flex items-center justify-center text-3xl font-bold'>
                                <FaIndianRupeeSign />
                                <h1>{e.price}</h1>
                            </div>
                            <div className='col-span-2 flex items-center justify-center text-3xl font-bold'>{new Date(e.updatedAt).toLocaleDateString()}</div>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </>
    )
}

export default Order