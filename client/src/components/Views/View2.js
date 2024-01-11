import React from 'react'

function View2() {
    return (
        <>
            <div className='border-2 border-gray-300 sm:p-5 p-3 rounded-md bg-white'>
                <h1 className='font-bold text-xl'>Related products</h1>
                <div className='my-5 grid grid-cols-12 sm:gap-5 gap-2'>
                    <div className='lg:col-span-2 sm:col-span-4 col-span-6'>
                        <div className='sm:p-2 p-1 border-2 border-gray-300 rounded-md mb-2 flex justify-center items-center'>
                            <img src={require('../Views/image/image 24.png')} alt="" className='h-32' />
                        </div>
                        <h1>Xiaomi Redmi 8 Original</h1>
                        <h1 className='text-gray-500'>$32.00 - $40.00</h1>
                    </div>
                    <div className='lg:col-span-2 sm:col-span-4 col-span-6'>
                        <div className='sm:p-2 p-1 border-2 border-gray-300 rounded-md mb-2 flex justify-center items-center'>
                            <img src={require('../Views/image/image 00.png')} alt="" className='h-32' />
                        </div>
                        <h1>Xiaomi Redmi 8 Original</h1>
                        <h1 className='text-gray-500'>$32.00 - $40.00</h1>
                    </div>
                    <div className='lg:col-span-2 sm:col-span-4 col-span-6'>
                        <div className='sm:p-2 p-1 border-2 border-gray-300 rounded-md mb-2 flex justify-center items-center'>
                            <img src={require('../Views/image/image 86.png')} alt="" className='h-32' />
                        </div>
                        <h1>Xiaomi Redmi 8 Original</h1>
                        <h1 className='text-gray-500'>$32.00 - $40.00</h1>
                    </div>
                    <div className='lg:col-span-2 sm:col-span-4 col-span-6'>
                        <div className='sm:p-2 p-1 border-2 border-gray-300 rounded-md mb-2 flex justify-center items-center'>
                            <img src={require('../Views/image/Bitmaps.png')} alt="" className='h-32' />
                        </div>
                        <h1>Xiaomi Redmi 8 Original</h1>
                        <h1 className='text-gray-500'>$32.00 - $40.00</h1>
                    </div>
                    <div className='lg:col-span-2 sm:col-span-4 col-span-6'>
                        <div className='sm:p-2 p-1 border-2 border-gray-300 rounded-md mb-2 flex justify-center items-center'>
                            <img src={require('../Views/image/image 85.png')} alt="" className='h-32' />
                        </div>
                        <h1>Xiaomi Redmi 8 Original</h1>
                        <h1 className='text-gray-500'>$32.00 - $40.00</h1>
                    </div>
                    <div className='lg:col-span-2 sm:col-span-4 col-span-6'>
                        <div className='sm:p-2 p-1 border-2 border-gray-300 rounded-md mb-2 flex justify-center items-center'>
                            <img src={require('../Views/image/rasm.png')} alt="" className='h-32' />
                        </div>
                        <h1>Xiaomi Redmi 8 Original</h1>
                        <h1 className='text-gray-500'>$32.00 - $40.00</h1>
                    </div>
                </div>
            </div>


            <div className='my-5 grid grid-cols-12'>
                <div className='bg-blue-500 col-span-7 sm:p-8 p-2 sm:rounded-s-md'>
                    <h1 className='text-white text-2xl font-semibold'>Super discount on more than 100 USD</h1>
                    <p className='text-gray-200'>Have you ever finally just write dummy info</p>
                </div>
                <div className='bg-blue-600 flex justify-end items-center col-span-5 p-5 sm:rounded-e-md'>
                    <div className='bg-orange-400 text-white rounded-md py-1 px-3'>
                        <button className='text-xl'>Shop now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View2
