import React from 'react'
import { PiSquaresFourBold } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { FaShoppingCart, FaClipboardList } from "react-icons/fa";
import { TbShoppingCartPlus } from "react-icons/tb";
import { MdWorkHistory } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center ps-7 py-5'>
                    <img src={require('../../image/logo.png')} className='bg-blue-500 p-1 h-8 w-8 rounded-md text-white ' alt="" />
                    <h1 className='text-blue-300 text-3xl font-bold md:ps-2 cursor-pointer'>Brand</h1>
                </div>
                <PiSquaresFourBold className='text-4xl cursor-pointer me-4 text-blue-300 hover:text-white py-1 hover:bg-blue-500 rounded-md' />
            </div>
            <hr className='h-px my-1 bg-gray-400 border-0 dark:bg-gray-600' />
            <div className='flex flex-col justify-center px-8 text-white py-4'>
                <div className='flex items-center space-x-4 text-2xl pb-2 cursor-pointer' onClick={() => navigate("/admin")}>
                    <IoHome className='hover:bg-blue-500 rounded-md p-1 text-3xl' /><h1>Dashboard</h1>
                </div>
                <div className='flex items-center space-x-4 text-2xl pb-2 cursor-pointer' onClick={() => navigate("/admin/user")}>
                    <HiUsers className='hover:bg-blue-500 rounded-md p-1 text-3xl' /><h1>Users</h1>
                </div>
                <div className='flex items-center space-x-4 text-2xl pb-2 cursor-pointer' onClick={() => navigate("/admin/product")}>
                    <FaShoppingCart className='hover:bg-blue-500 rounded-md p-1 text-3xl' /><h1>Product</h1>
                </div>
                <div className='flex items-center space-x-4 text-2xl pb-2 cursor-pointer' onClick={() => navigate("/admin/addproduct")}>
                    <TbShoppingCartPlus className='hover:bg-blue-500 rounded-md p-1 text-3xl' /><h1>Add Product</h1>
                </div>
                <div className='flex items-center space-x-4 text-2xl pb-2 cursor-pointer' onClick={() => navigate("/admin/productlist")}>
                    <FaClipboardList className='hover:bg-blue-500 rounded-md p-1 text-3xl' /><h1>Product List</h1>
                </div>
                <div className='flex items-center space-x-4 text-2xl pb-2 cursor-pointer' onClick={() => navigate("/admin/orderhistory")}>
                    <MdWorkHistory className='hover:bg-blue-500 rounded-md p-1 text-3xl' /><h1>Order History</h1>
                </div>
                <div className='flex items-center space-x-4 text-2xl pb-2 cursor-pointer'>
                    <RiLogoutBoxFill className='hover:bg-blue-500 rounded-md p-1 text-3xl' /><h1>Logout</h1>
                </div>
            </div>
        </div>
    )
}

export default Sidebar