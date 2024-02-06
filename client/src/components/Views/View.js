/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { FaAngleRight, FaCheck, FaHeart, FaRegHeart } from "react-icons/fa";
import { IoStar, IoStarHalf, IoBasketSharp } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { MdMessage, MdSecurity } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import View1 from './View1';
import View2 from './View2';
import Footer from '../Footer';
import Header from '../Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function View() {

    const { id } = useParams()
    const [data, setData] = useState()
    // const [cart, setCart] = useState()

    const userId = localStorage.getItem("id");
    const productId = id;

    const handleClick = async () => {
        const data = { userId, productId };
        // console.log(userId, productId);
        try {
            const result = await axios.post("http://localhost:5555/api/v1/cart/addcart", data);

            if (result.status === 200) {
                console.log("Successfully added to cart");
            } else {
                console.log("Request was not successful");
            }
        } catch (error) {
            console.error("Error making the request:", error.message);
        }
    };

    useEffect(() => {
        const getProductInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/api/v1/product/getproduct/${id}`);
                setData(response.data.result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getProductInfo();
    }, []);

    // useEffect(() => {
    //     const getCartItem = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:5555/api/v1/cart/getcart/${userId}`);
    //             setCart(response.data.result);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }
    //     getCartItem()
    // }, [])

    // console.log(cart);

    return (
        <>
            <Header />
            <div className='xl:px-28 lg:px-16 md:px-6 sm:px-2 bg-gray-100 py-5'>
                <div className='flex items-center mb-5'>
                    <h1 className='sm:p-0 px-2'>Home</h1>
                    <FaAngleRight className='mt-1 ms-2' />
                </div>


                {/* ///////////// */}

                <div className='border-2 rounded-md bg-white border-gray-300'>
                    {data &&
                        <div className='grid grid-cols-12 lg:gap-5 gap-1'>
                            <>
                                <div className='md:col-span-4 sm:col-span-5 col-span-12 lg:m-5 sm:m-1 m-5 '>
                                    <div className='border-2 border-gray-300 rounded-md flex justify-center items-center'>
                                        <img src={data.image} alt="" className='h-80 p-5' />
                                    </div>
                                </div>
                                <div className='md:col-span-5 sm:col-span-7 col-span-12 lg:my-5 sm:my-1 m-5'>
                                    <div className='flex items-center text-green-400'>
                                        <FaCheck className=' me-2' />
                                        <p>In stock</p>
                                    </div>
                                    <h1 className='font-semibold text-2xl'>{data.productName}</h1>
                                    <h1 className='font-semibold text-xl pb-2 text-gray-700'>{data.description}</h1>
                                    <div className='flex flex-wrap items-center'>
                                        <div className='text-orange-500 flex'>
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStarHalf />
                                        </div>
                                        <h1 className='ps-3'>9.3</h1>
                                        <BsDot />
                                        <MdMessage className='mt-1 me-2' />
                                        <h1>32 reviews</h1>
                                        <BsDot />
                                        <IoBasketSharp className='me-2 text-lg' />
                                        <p>154 sold</p>
                                    </div>
                                    <div className='text-gray-500'>
                                        <div className='flex my-3'>
                                            <h1 className='w-32 text-xl text-black font-bold'>Price:</h1>
                                            <div className='flex items-center text-xl text-black font-bold'>
                                                <FaIndianRupeeSign />
                                                <h1 className='text-2xl text-black'>{data.price}</h1>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='flex mt-3'>
                                            <h1 className='w-32'>Style:</h1>
                                            <p>{data.styles}</p>
                                        </div>
                                        <div className='flex mt-3'>
                                            <h1 className='w-32'>Material:</h1>
                                            <p>{data.material}</p>
                                        </div>
                                        <div className='flex my-3'>
                                            <h1 className='w-32'>Design:</h1>
                                            <p>Modern nice</p>
                                        </div>
                                        <hr />
                                        <div className='flex my-3'>
                                            <h1 className='w-32'>Size:</h1>
                                            <p>{data.size}</p>
                                        </div>
                                        <div className='flex my-3'>
                                            <h1 className='w-32'>Protection:</h1>
                                            <p>Refund Policy</p>
                                        </div>
                                        <div className='flex my-3'>
                                            <h1 className='w-32'>Warranty:</h1>
                                            <p>2 year full warranty</p>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </>
                            <div className='md:col-span-3 sm:col-span-5 col-span-12 lg:p-5 sm:p-1 p-5'>
                                <div className="border-2 border-gray-300 p-5 rounded-md">
                                    <div className='flex mb-5'>
                                        <div className='bg-cyan-100 py-2 px-3 rounded-md me-3'>
                                            <h1 className='font-bold text-2xl text-teal-400'>R</h1>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h1>Supplier</h1>
                                            <h1>Guanjoi Trading LLC</h1>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='mt-3 text-gray-400'>
                                        <div className='flex items-center mb-2'>
                                            <img src={require('../../image/india.png')} alt="" className='me-5' />
                                            <h1>Ahmedabad, India</h1>
                                        </div>
                                        <div className='flex items-center mb-2'>
                                            <MdSecurity className='me-7 text-2xl' />
                                            <h1>Verfied Seller</h1>
                                        </div>
                                        <div className='flex items-center'>
                                            <TbWorld className='me-7 text-2xl' />
                                            <h1>Worldwide shipping</h1>
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-5'>
                                        <button className='bg-blue-500 text-white rounded-md text-xl py-1 mb-2'>Send inquiry</button>
                                        <button className='text-blue-500 border-2 border-gray-300 rounded-md text-xl py-1'>Seller's profile</button>
                                    </div>
                                </div>

                                <div className='flex justify-center items-center py-10'>
                                    <FaRegHeart className='text-2xl text-blue-500 me-3' onClick={() => handleClick()} />
                                    <FaHeart className='text-2xl text-blue-500 me-3' />
                                    <h1 className='text-blue-500 text-2xl'>My Cart</h1>
                                </div>
                            </div>
                        </div>
                    }
                </div>


                {/* View page */}
                <View1 />
                <View2 />
            </div>
            <Footer />
        </>
    )
}

export default View
