import React from 'react'
import Banner from '../image/image92.png'
import Banner1 from '../image/image98.png'

function Main() {
    return (
        <>
            {/* Home and outdoor */}
            <div className='grid sm:grid-cols-11 grid-cols-10  grid-rows-2 border-2 border-gray-300'>
                <div className='md:col-span-3 sm:col-span-5 col-span-11 row-span-2 bg-no-repeat bg-cover bg-center sm:p-10 p-16' style={{ backgroundImage: `url(${Banner})` }} >
                    <h1 className='text-2xl font-semibold pb-3'>Home and outdoor</h1>
                    <button className='bg-white p-2 rounded-md font-medium'>Source now</button>
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5 border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium '>Soft chairs</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/rasm.png')} alt="" className='float-right' />
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5  border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Lights</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 94.png')} alt="" className='float-right' />
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5  border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Bed sheet</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 93.png')} alt="" className='float-right' />
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5 border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Kitchen product</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 90.png')} alt="" className='float-right h-20' />
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5  border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Kitchen mixer</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 88.png')} alt="" className='float-right' />
                </div>
                <div className='bg-white pt-4 px-4 md:col-span-2 sm:col-span-3 col-span-5 border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Blenders</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 87.png')} alt="" className='float-right' />
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5  border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Home appliance</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/home.png')} alt="" className='float-right' />
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5  border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Coffee maker</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 89.png')} alt="" className='float-right' />
                </div>
            </div>


            {/* Gadgets and electronics */}
            <div className='grid sm:grid-cols-11 grid-cols-10  grid-rows-2 border-2 border-gray-300 mt-5'>
                <div className='md:col-span-3 sm:col-span-5 col-span-10 row-span-2 bg-no-repeat bg-cover bg-center sm:p-10 p-16' style={{ backgroundImage: `url(${Banner1})` }} >
                    <h1 className='text-2xl font-semibold pb-3'>Consumer electronics and gadgets</h1>
                    <button className='bg-white p-2 rounded-md font-medium'>Source now</button>
                </div>
                <div className='bg-white pt-4 px-4 md:col-span-2 sm:col-span-3 col-span-5 border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium '>Smart Watch</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 35.png')} alt="" className='float-right h-20 mb-2' />
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5  border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Cameras</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 28.png')} alt="" className='float-right h-20 mb-2' />
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5  border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Headphones</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 86.png')} alt="" className='float-right h-20 mb-2' />
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5 border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Gizare</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 85.png')} alt="" className='float-right h-20 mb-2' />
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5  border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Gaming set</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 29.png')} alt="" className='float-right h-20 mb-2' />
                </div>
                <div className='bg-white pt-4 px-4 md:col-span-2 sm:col-span-3 col-span-5 border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Laptops & PC</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 34.png')} alt="" className='float-right h-20 mb-2' />
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5  border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Smartphones</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 32.png')} alt="" className='float-right h-20 mb-2' />
                </div>
                <div className='bg-white pt-4  px-4 md:col-span-2 sm:col-span-3 col-span-5  border-e-2 border-b-2'>
                    <h1 className='text-xl font-medium'>Electric Kattles</h1>
                    <p className='text-gray-500'>From</p>
                    <p className='text-gray-500 absolute'>USD 19</p>
                    <img src={require('../image/image 33.png')} alt="" className='float-right h-20 mb-2' />
                </div>
            </div>
        </>
    )
}

export default Main
