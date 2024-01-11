import React from 'react'
import Banner from '../image/Maskgroup.png'

function Main1() {
    return (
        <>
            <div style={{ backgroundImage: `url(${Banner})` }} className='my-5 sm:rounded-md bg-no-repeat bg-cover bg-center'>
                <div className='flex sm:flex-row flex-col'>
                    <div className='basis-1/2 lg:p-12 p-6  text-white'>
                        <h1 className='text-4xl font-semibold pb-5'>An easy way to send requests to all suppliers</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaque, nostrum dolore numquam nulla quo.</p>
                    </div>
                    <div className='basis-1/2 lg:p-10 p-6'>
                        <div className='bg-white rounded-md lg:p-10 p-5 flex flex-col'>
                            <h1 className='text-2xl font-semibold mb-3'>Send quote to suppliers</h1>
                            <input type="text" placeholder='What item you need?' className='border-2 outline-none rounded-md p-1 px-2 font-medium text-black mb-3 placeholder:text-black' />
                            <textarea name="" id="" cols="30" rows="3" placeholder='Type more details' className='border-2 px-2 outline-none rounded-md p-1 font-medium text-black mb-3'></textarea>
                            <div className='flex md:flex-row flex-col'>
                                <input type="text" placeholder='Quality' className='border-2 px-2 outline-none rounded-md p-1 font-medium text-black mb-3 md:me-3 placeholder:text-black' />
                                <input type="number" name="" id="" placeholder='Pcs' className='border-2 px-2 outline-none rounded-md p-1 font-medium text-black mb-3 placeholder:text-black' />
                            </div>
                            <div>
                                <button className='bg-blue-500 text-white p-2 px-3 rounded-md'>Send inquiry</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <h1 className='font-semibold text-2xl mb-5 sm:ps-0 ps-3'>Recommended items</h1>
                <div className='grid sm:grid-cols-5 min-[450px]:grid-cols-3 grid-cols-2 md:gap-5 gap-2 sm:px-0 px-2'>
                    <div className='bg-white flex flex-col lg:p-5 p-2 rounded-md border-2'>
                        <img src={require('../image/Bitmaps.png')} alt="" className='lg:p-5 mb-2' />
                        <h1 className='font-medium '>$10.30</h1>
                        <h1 className='text-gray-500'>T-shirt with multiple colors, for men</h1>
                    </div>
                    <div className='bg-white flex flex-col lg:p-5 p-2 rounded-md border-2'>
                        <img src={require('../image/2 1.png')} alt="" className='lg:p-5 mb-2' />
                        <h1 className='font-medium '>$10.30</h1>
                        <h1 className='text-gray-500'>Jeans shorts for men blue color</h1>
                    </div>
                    <div className='bg-white flex flex-col lg:p-5 p-2 rounded-md border-2'>
                        <img src={require('../image/image 30.png')} alt="" className='lg:p-5 mb-2' />
                        <h1 className='font-medium '>$10.30</h1>
                        <h1 className='text-gray-500'>Brown winter coat medium size</h1>
                    </div>
                    <div className='bg-white flex flex-col lg:p-5 p-2 rounded-md border-2'>
                        <img src={require('../image/image 24.png')} alt="" className='lg:p-5 mb-2' />
                        <h1 className='font-medium '>$10.30</h1>
                        <h1 className='text-gray-500'>Jeans bag for travel for men</h1>
                    </div>
                    <div className='bg-white flex flex-col lg:p-5 p-2 rounded-md border-2'>
                        <img src={require('../image/image 26.png')} alt="" className='lg:p-5 mb-2' />
                        <h1 className='font-medium '>$10.30</h1>
                        <h1 className='text-gray-500'>Leather wallet</h1>
                    </div>
                    <div className='bg-white flex flex-col lg:p-5 p-2 rounded-md border-2'>
                        <img src={require('../image/Bitmap.png')} alt="" className='lg:p-5 mb-2' />
                        <h1 className='font-medium '>$10.30</h1>
                        <h1 className='text-gray-500'>Canon camera black, 100 * zoom</h1>
                    </div>
                    <div className='bg-white flex flex-col lg:p-5 p-2 rounded-md border-2'>
                        <img src={require('../image/image 86.png')} alt="" className='lg:p-5 mb-2' />
                        <h1 className='font-medium '>$10.30</h1>
                        <h1 className='text-gray-500'>Headset for gaming with mic</h1>
                    </div>
                    <div className='bg-white flex flex-col lg:p-5 p-2 rounded-md border-2'>
                        <img src={require('../image/image 26.png')} alt="" className='lg:p-5 mb-2' />
                        <h1 className='font-medium '>$10.30</h1>
                        <h1 className='text-gray-500'>Smartwatch silver color modern </h1>
                    </div>
                    <div className='bg-white flex flex-col lg:p-5 p-2 rounded-md border-2'>
                        <img src={require('../image/image 90.png')} alt="" className='lg:p-5 mb-2' />
                        <h1 className='font-medium '>$10.30</h1>
                        <h1 className='text-gray-500'>Blue wallet for men leather metarfial</h1>
                    </div>
                    <div className='bg-white flex flex-col lg:p-5 p-2 rounded-md border-2'>
                        <img src={require('../image/image 85.png')} alt="" className='lg:p-5 mb-2' />
                        <h1 className='font-medium '>$10.30</h1>
                        <h1 className='text-gray-500'>Jeans bag for travel for men </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main1
