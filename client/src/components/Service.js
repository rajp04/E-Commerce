import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdInventory, MdOutlineSecurity, MdOutlineSend } from "react-icons/md";

function Service() {
    return (
        <>
            <h1 className='my-5 text-2xl font-semibold sm:p-0 px-2'>Our Extra Services</h1>
            <div className='grid grid-cols-12 md:gap-5 gap-2 sm:px-0 px-2'>
                <div className='sm:col-span-3 col-span-6'>
                    <div className="w-full h-32 relative bg-cover bg-center bg-no-repeat rounded-t-md" style={{ backgroundImage: `url(${require("../image/image108.png")})` }}>
                        <FaSearch className='text-xl text-center bg-blue-100 border-2 border-white rounded-full w-14 h-14 p-4 absolute right-5 -bottom-6' />
                    </div>
                    <div className='border-b-2 border-s-2 border-e-2 rounded-b-md border-gray-300 p-5 bg-white'>
                        <h1 className='text-xl font-medium'>Source Industry Hubs</h1>
                    </div>
                </div>
                <div className='sm:col-span-3 col-span-6'>
                    <div className="w-full h-32 relative bg-cover bg-center bg-no-repeat rounded-t-md" style={{ backgroundImage: `url(${require("../image/image104.png")})` }}>
                        <MdInventory className='text-xl text-center bg-blue-100 border-2 border-white rounded-full w-14 h-14 p-4 absolute right-5 -bottom-6' />
                    </div>
                    <div className='border-b-2 border-s-2 border-e-2 rounded-b-md border-gray-300 p-5 bg-white'>
                        <h1 className='text-xl font-medium'>Customize Your Products</h1>
                    </div>
                </div>
                <div className='sm:col-span-3 col-span-6'>
                    <div className="w-full h-32 relative bg-cover bg-center bg-no-repeat rounded-t-md" style={{ backgroundImage: `url(${require("../image/image106.png")})` }}>
                        <MdOutlineSend className='text-xl text-center bg-blue-100 border-2 border-white rounded-full w-14 h-14 p-4 absolute right-5 -bottom-6' />
                    </div>
                    <div className='border-b-2 border-s-2 border-e-2 rounded-b-md border-gray-300 p-5 bg-white'>
                        <h1 className='text-xl font-medium'>Fast, reliable shipping </h1>
                    </div>
                </div>
                <div className='sm:col-span-3 col-span-6'>
                    <div className="w-full h-32 relative bg-cover bg-center bg-no-repeat rounded-t-md" style={{ backgroundImage: `url(${require("../image/image107.png")})` }}>
                        <MdOutlineSecurity className='text-xl text-center bg-blue-100 border-2 border-white rounded-full w-14 h-14 p-4 absolute right-5 -bottom-6' />
                    </div>
                    <div className='border-b-2 border-s-2 border-e-2 rounded-b-md border-gray-300 p-5 bg-white'>
                        <h1 className='text-xl font-medium'>Product your monitoring  </h1>
                    </div>
                </div>
            </div>



            <h1 className='text-2xl font-semibold my-5 sm:p-0 px-2'>Suppliers by region</h1>
            <div className='grid lg:grid-cols-10 grid-cols-12 sm:p-0 px-2'>
                <div className='lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6 flex items-center mb-3'>
                    <img src={require('../image/AE@2x.png')} alt="" className='h-7 pe-2' />
                    <div>
                        <h1 className='font-medium text-lg'>Arabic Emirates</h1>
                        <p>shopname.ae</p>
                    </div>
                </div>
                <div className='lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6 flex items-center mb-3'>
                    <img src={require('../image/AU@2x.png')} alt="" className='h-7 pe-2' />
                    <div>
                        <h1 className='font-medium text-lg'>Australia</h1>
                        <p>shopname.ae</p>
                    </div>
                </div>
                <div className='lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6 flex items-center mb-3'>
                    <img src={require('../image/US@2x.png')} alt="" className='h-7 pe-2' />
                    <div>
                        <h1 className='font-medium text-lg'>United States</h1>
                        <p>shopname.ae</p>
                    </div>
                </div>
                <div className='lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6 flex items-center mb-3'>
                    <img src={require('../image/RU@2x.png')} alt="" className='h-7 pe-2' />
                    <div>
                        <h1 className='font-medium text-lg'>Russia</h1>
                        <p>shopname.ae</p>
                    </div>
                </div>
                <div className='lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6 flex items-center mb-3'>
                    <img src={require('../image/IT@2x.png')} alt="" className='h-7 pe-2' />
                    <div>
                        <h1 className='font-medium text-lg'>Italy</h1>
                        <p>shopname.ae</p>
                    </div>
                </div>
                <div className='lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6 flex items-center mb-3'>
                    <img src={require('../image/DK@2x.png')} alt="" className='h-7 pe-2' />
                    <div>
                        <h1 className='font-medium text-lg'>Denmark</h1>
                        <p>shopname.ae</p>
                    </div>
                </div>
                <div className='lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6 flex items-center mb-3'>
                    <img src={require('../image/FR@2x.png')} alt="" className='h-7 pe-2' />
                    <div>
                        <h1 className='font-medium text-lg'>France</h1>
                        <p>shopname.ae</p>
                    </div>
                </div>
                <div className='lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6 flex items-center mb-3'>
                    <img src={require('../image/AE@2x.png')} alt="" className='h-7 pe-2' />
                    <div>
                        <h1 className='font-medium text-lg'>Arabic Emirates</h1>
                        <p>shopname.ae</p>
                    </div>
                </div>
                <div className='lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6 flex items-center mb-3'>
                    <img src={require('../image/CN@2x.png')} alt="" className='h-7 pe-2' />
                    <div>
                        <h1 className='font-medium text-lg'>China</h1>
                        <p>shopname.ae</p>
                    </div>
                </div>
                <div className='lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6 flex items-center mb-3'>
                    <img src={require('../image/GB@2x.png')} alt="" className='h-7 pe-2' />
                    <div>
                        <h1 className='font-medium text-lg'>Great Britain</h1>
                        <p>shopname.ae</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
