import React, { useEffect } from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import { useNavigate } from 'react-router-dom'
import { FaIndianRupeeSign } from 'react-icons/fa6'

function Order() {
    const navigate = useNavigate()

    const user = localStorage.getItem('id')
    useEffect(() => {
        if (!user) {
            return navigate('/login')
        }
    },)
    return (
        <>
            <Header />
            <div className='py-5 px-5 bg-gray-100'>
                <h1 className='text-4xl font-bold pb-5'>Order History</h1>
                <div className='grid grid-cols-10 bg-gray-200 rounded-t-md py-1'>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Product Image</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Product Name</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Size</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Units</h1>
                    <h1 className='col-span-2 text-xl font-medium text-center'>Price</h1>
                </div>
                <div className='grid grid-cols-10 border-2 bg-white rounded-b-md py-1'>
                    <div className='flex justify-center items-center col-span-2'>
                        <img src={require("../image/home.png")} alt="" />
                    </div>
                    <h1 className='col-span-2 flex justify-center items-center text-xl font-medium whitespace-pre-wrap'>men tshirt</h1>
                    <h1 className='col-span-2 flex justify-center items-center text-3xl font-bold'>M</h1>
                    <h1 className='col-span-2 flex justify-center items-center text-3xl font-bold'>5</h1>
                    <div className='col-span-2 flex items-center justify-center text-3xl font-bold'>
                        <FaIndianRupeeSign />
                        <h1>120</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Order