import React from 'react'
import { FaInstagramSquare, FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaLinkedin, FaAngleDown } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <div className='bg-gray-200 flex flex-col justify-center items-center text-center py-10 sm:m-0'>
                <h1 className='font-semibold text-2xl'>Subscribe on our newletter</h1>
                <p className='text-center'>Get daily news on upcoming offers from many suppliers all over the world</p>
                <div className='pt-3'>
                    <input type="text" placeholder='Email' className='px-2 rounded-md py-1 outline-none me-2 font-medium' />
                    <button className='bg-blue-500 rounded-md px-4 py-1 font-medium text-white sm:mt-0 mt-3'>Subscribe</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-5 lg:gap-5 gap-2 xl:px-28 lg:px-16 md:px-6 px-2 my-7'>
                <div className='col-span-2'>
                    <div className='flex items-center mb-5'>
                        <img src={require('../image/logo.png')} className='bg-blue-500 p-2 h-9 w-10 rounded-md text-white ' alt="" />
                        <h1 className='text-blue-300 text-3xl font-bold md:ps-2'>Brand</h1>
                    </div>
                    <h1 className='text-gray-500'>Best information about the company gies here but now lorem ipsum is</h1>
                    <div className='flex text-2xl space-x-4 text-gray-500 mt-5'>
                        <FaFacebookSquare />
                        <FaSquareXTwitter />
                        <FaLinkedin />
                        <FaInstagramSquare />
                        <FaYoutubeSquare />
                    </div>
                </div>
                <div className='text-gray-500 '>
                    <h1 className='font-bold text-black text-xl'>About</h1>
                    <h1>About us</h1>
                    <h1>Find store</h1>
                    <h1>Categories</h1>
                    <h1>Blogs</h1>
                </div>
                <div className='text-gray-500 '>
                    <h1 className='font-bold text-black text-xl'>Partnership</h1>
                    <h1>About us</h1>
                    <h1>Find store</h1>
                    <h1>Categories</h1>
                    <h1>Blogs</h1>
                </div>
                <div className='text-gray-500'>
                    <h1 className='font-bold text-black text-xl'>Information</h1>
                    <h1>Help Center</h1>
                    <h1>Money Refund</h1>
                    <h1>Shipping</h1>
                    <h1>Contact us</h1>
                </div>
                <div className='text-gray-500'>
                    <h1 className='font-bold text-black text-xl'>For users</h1>
                    <h1>Login</h1>
                    <h1>Register</h1>
                    <h1>Settings</h1>
                    <h1>My Orders</h1>
                </div>
                <div className=''>
                    <h1 className='font-bold text-black text-xl'>Get app</h1>
                    <img src={require('../image/app-store.png')} alt="" className='h-24' />
                </div>
            </div>
            <hr />
            <div className='bg-gray-200 flex items-center justify-between xl:px-28 lg:px-16 md:px-6 px-2 h-16 whitespace-nowrap'>
                <h1>&copy; 2023 Ecommerce.</h1>
                <div className='flex space-x-2'>
                    <h1 className='flex'><img src={require('../image/india.png')} alt="" className='h-7 w-7' />&nbsp; English</h1>
                    <FaAngleDown className='mt-1 text-gray-500' />
                </div>
            </div>
        </>
    )
}

export default Footer
