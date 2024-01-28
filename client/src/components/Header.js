import React from 'react'
import { FaUserLarge, FaHeart, FaCartShopping, FaAngleDown } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
    const navigate = useNavigate()

    const user = localStorage.getItem("id")

    return (
        <>
            <div className='flex justify-between items-center h-16 xl:px-28 lg:px-16 md:px-6 px-2'>
                <div className='flex items-center' onClick={() => navigate("/")}>
                    <img src={require('../image/logo.png')} className='bg-blue-500 p-2 h-9 w-10 rounded-md text-white ' alt="" />
                    <h1 className='text-blue-300 text-3xl font-bold md:ps-2 cursor-pointer'>Brand</h1>
                </div>
                <div className='sm:flex hidden items-center justify-center '>
                    <input type="text" placeholder='Search' className='p-1 font-semibold px-2 border-y-2 border-s-2 outline-none border-blue-500 rounded-s-md w-auto xl:w-96 lg:w-72 md:w-40 sm:w-32' />
                    <div className='border-y-2 border-blue-500 border py-1 md:px-3 px-1 flex items-center justify-center'>
                        <h1 className='md:pe-3 pe-1 whitespace-nowrap'>All category</h1>
                        <FaAngleDown className='text-gray-500 mt-1' />
                    </div>
                    <h1 className='border-y-2 border-e-2 border-blue-500 border bg-blue-500 rounded-e-md py-1 md:px-5 px-1 text-white'>Search</h1>
                </div>
                <div className='flex items-center justify-center text-gray-500 lg:space-x-4 space-x-1'>
                    {user ? (
                        <>
                            <div className='flex-col flex items-center justify-center max-[250px]:hidden cursor-pointer' onClick={() => navigate('/account')}>
                                <FaUserLarge className='md:text-xl' />
                                <h1 className='text-sm'  >Account</h1>
                            </div>
                            <div className='flex-col flex items-center justify-center max-[350px]:hidden cursor-pointer' onClick={()=> navigate("/message")}>
                                <BiSolidMessageDetail className='md:text-xl' />
                                <h1 className='text-sm '>Message</h1>
                            </div>
                            <div className='flex-col flex items-center justify-center max-[300px]:hidden'>
                                <FaHeart className='md:text-xl' />
                                <h1 className='text-sm'>Orders</h1>
                            </div>
                            <div className='flex-col flex items-center justify-center cursor-pointer' onClick={() => navigate('/cart')}>
                                <FaCartShopping className='md:text-xl' />
                                <h1 className='text-sm whitespace-nowrap'>My Cart</h1>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex-col flex items-center justify-center max-[350px]:hidden cursor-pointer' onClick={()=> navigate("/message")}>
                                <BiSolidMessageDetail className='md:text-xl' />
                                <h1 className='text-sm'>Message</h1>
                            </div>
                            <div className='flex-col flex items-center justify-center max-[300px]:hidden'>
                                <FaHeart className='md:text-xl' />
                                <h1 className='text-sm'>Orders</h1>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className='sm:hidden flex items-center justify-center mx-2 mb-2'>
                <input type="text" placeholder='Search' className='p-1 font-semibold px-2 border-y-2 border-s-2 outline-none border-blue-500 rounded-s-md w-full' />
                <div className='border-y-2 border-blue-500 border py-1 md:px-3 px-1 flex items-center justify-center'>
                    <h1 className='md:pe-3 pe-1 whitespace-nowrap'>All category</h1>
                    <FaAngleDown className='text-gray-500 mt-1' />
                </div>
                <h1 className='border-y-2 border-e-2 border-blue-500 border bg-blue-500 rounded-e-md py-1 md:px-5 px-1 text-white'>Search</h1>
            </div>
            <hr />

            <Navbar />

        </>
    )
}

export default Header
