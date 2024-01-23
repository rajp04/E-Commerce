import React from 'react'
import { FaAngleRight, FaCheck, FaRegHeart } from "react-icons/fa";
import { IoStar, IoStarHalf, IoBasketSharp } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { MdMessage, MdSecurity } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import View1 from './View1';
import View2 from './View2';
import Footer from '../Footer';
import Header from '../Header';



function View() {
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
                    <div className='grid grid-cols-12 lg:gap-5 gap-1'>
                        <div className='md:col-span-4 sm:col-span-5 col-span-12 lg:m-5 sm:m-1 m-5 '>
                            <div className='border-2 border-gray-300 rounded-md flex justify-center items-center'>
                                <img src={require('../Views/image/image 34.png')} alt="" />
                            </div>
                            <div className='my-5 flex justify-between items-center'>
                                <div className='border-2 border-gray-300'>
                                    <img src={require('../Views/image/image 35.png')} alt="" />
                                </div>
                                <div className='border-2 border-gray-300'>
                                    <img src={require('../Views/image/image 40.png')} alt="" />
                                </div>
                                <div className='border-2 border-gray-300'>
                                    <img src={require('../Views/image/image 36.png')} alt="" />
                                </div>
                                <div className='border-2 border-gray-300'>
                                    <img src={require('../Views/image/image 37.png')} alt="" />
                                </div>
                                <div className='border-2 border-gray-300'>
                                    <img src={require('../Views/image/image 39.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='md:col-span-5 sm:col-span-7 col-span-12 lg:my-5 sm:my-1 m-5'>
                            <div className='flex items-center text-green-400'>
                                <FaCheck className=' me-2' />
                                <p>In stock</p>
                            </div>
                            <h1 className='font-semibold text-2xl'>Men's T-Shirt</h1>
                            <h1 className='font-semibold text-2xl pb-2 text-gray-500'>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h1>
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
                                        <h1 className='text-2xl text-black'>8555</h1>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex mt-3'>
                                    <h1 className='w-32'>Type:</h1>
                                    <p>Classic shoes</p>
                                </div>
                                <div className='flex mt-3'>
                                    <h1 className='w-32'>Material:</h1>
                                    <p>Plastic material</p>
                                </div>
                                <div className='flex my-3'>
                                    <h1 className='w-32'>Design:</h1>
                                    <p>Modern nice</p>
                                </div>
                                <hr />
                                <div className='flex my-3'>
                                    <h1 className='w-32'>Customization:</h1>
                                    <p>Customized logo and design custom packages</p>
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
                                <FaRegHeart className='text-2xl text-blue-500 me-3' />
                                <h1 className='text-blue-500 text-2xl'>Save for later</h1>
                            </div>
                        </div>
                    </div>
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
