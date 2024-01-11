import React from 'react'
import { FaList, FaAngleDown } from "react-icons/fa6";

function Navbar() {
    return (
        <>
            <div className='md:flex justify-between md:items-center sm:h-12 xl:px-28 lg:px-16 md:px-6 px-2 whitespace-nowrap'>
                <div className='flex md:justify-center items-center lg:space-x-5 space-x-2 font-medium'>
                    <div className='flex space-x-2 justify-center items-center'>
                        <FaList />
                        <h1>All category</h1>
                    </div>
                    <h1>Hot offers</h1>
                    <h1 className='max-[300px]:hidden'>gift boxes</h1>
                    <h1 className='max-[365px]:hidden'>Project</h1>
                    <h1 className='max-[450px]:hidden'>Menu item</h1>
                    <div className='flex space-x-1 justify-center items-center max-[500px]:hidden'>
                        <h1>Help</h1>
                        <FaAngleDown className='mt-1 text-gray-500' />
                    </div>
                </div>
                <div className='flex items-center lg:space-x-10 space-x-2 font-medium mb-2'>
                    <div className='flex space-x-2'>
                        <h1>Engish, USD</h1>
                        <FaAngleDown className='mt-1 text-gray-500' />
                    </div>
                    <div className='flex space-x-2'>
                        <h1 className='flex'>Ship to &nbsp;<img src={require('../image/india.png')} alt="" className='h-7 w-7' /></h1>
                        <FaAngleDown className='mt-1 text-gray-500' />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Navbar
