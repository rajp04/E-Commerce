import React from 'react'
import { FaArrowLeft, FaTruckMoving } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { MdMessage, MdOutlineShoppingCart } from "react-icons/md";
import Header from '../Header';
import Footer from '../Footer';

function Cart() {
    return (
        <>
            <Header />
            <div className='xl:px-28 lg:px-16 md:px-6 sm:px-2 bg-gray-100 py-5'>
                <h1 className='font-bold text-2xl pb-5'>My Cart (3)</h1>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='border-2 lg:col-span-9 sm:col-span-8 col-span-12 border-gray-300 bg-white rounded-md p-5'>
                        <div className='justify-between sm:flex mb-5'>
                            <div className='sm:flex justify-center items-center'>
                                <div className='border-2 border-gray-300 p-1 rounded-md flex items-center justify-center w-fit'>
                                    <img src={require('../Cart/image/Bitmap.png')} alt="" />
                                </div>
                                <div className='ms-3'>
                                    <h1 className='font-semibold text-xl mb-1'>T-shirts with multiple colors, for men and lady</h1>
                                    <p className='text-gray-500'>Size: Medium, Color: Blue, Material: Plastic</p>
                                    <p className='text-gray-500 mb-2'>Seller: Artel Market</p>
                                    <div className='flex'>
                                        <button className='text-red-500 font-medium border-2 py-1 px-2 rounded-md'>Remove</button>
                                        <button className='text-blue-500 font-medium border-2 py-1 px-2 rounded-md ms-3'>Save for later</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center mt-3'>
                                    <h1 className='font-semibold text-xl mb-3 text-end'>Price:</h1>
                                    <h1 className='font-semibold text-xl mb-3 text-end'>$78.99</h1>
                                </div>
                                <div className='flex flex-wrap'>
                                    <input type="number" placeholder='Qty: 9' className='placeholder:text-black placeholder:font-bold py-1 px-2 border-2 border-gray-300 outline-none rounded-md w-full' />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center mt-5'>
                            <button className='flex justify-center items-center space-x-3 bg-blue-500 text-white py-1 px-3 rounded-md'>
                                <FaArrowLeft />
                                <h1 className='text-xl'>Back to shop</h1>
                            </button>
                            <button className='border-2 border-gray-300 text-blue-500 py-1 px-3 rounded-md text-xl'>
                                Remove All
                            </button>
                        </div>
                    </div>
                    <div className='lg:col-span-3 sm:col-span-4 col-span-12'>
                        <div className='border-2 border-gray-300 bg-white rounded-md p-5 mb-5'>
                            <h1 >Have a coupon?</h1>
                            <div className='mt-2 flex flex-wrap items-center justify-center'>
                                <input type="text" className='border-2 border-gray-300 outline-none px-2 rounded-md w-full py-1' placeholder='Add coupon' />
                                <button className='border-2 py-1 px-3 text-blue-500 font-medium  rounded-md mt-2'>Apply</button>
                            </div>
                        </div>
                        <div className='border-2 border-gray-300 bg-white rounded-md p-5'>
                            <div className='flex justify-between pb-1'>
                                <h1>Subtotal:</h1>
                                <h1>$1403.97</h1>
                            </div>
                            <div className='flex justify-between pb-1'>
                                <h1>Discount:</h1>
                                <h1 className='text-red-500'>- $60.00</h1>
                            </div>
                            <div className='flex justify-between pb-1'>
                                <h1>Tax:</h1>
                                <h1 className='text-green-500'>+ $14.00</h1>
                            </div>
                            <hr className='my-3' />
                            <div className='flex justify-between pb-2 font-bold text-lg'>
                                <h1>Total:</h1>
                                <h1>+ $1357.97</h1>
                            </div>
                            <div className='flex items-center text-white justify-center bg-green-600 rounded-md py-1 '>
                                <button className='text-xl font-semibold'>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='my-5 grid grid-cols-12 gap-5 sm:px-0 px-2'>
                    <div className='flex items-center xl:col-span-3 sm:col-span-4 col-span-12'>
                        <div className='p-4 bg-gray-300 rounded-full me-3'>
                            <IoMdLock className='text-2xl text-gray-500' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Secure payment</h1>
                            <p className='text-gray-500'>Have you ever finally just</p>
                        </div>
                    </div>
                    <div className='flex items-center xl:col-span-3 sm:col-span-4 col-span-12'>
                        <div className='p-4 bg-gray-300 rounded-full me-3'>
                            <MdMessage className='text-2xl text-gray-500' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Customer support</h1>
                            <p className='text-gray-500'>Have you ever finally just</p>
                        </div>
                    </div>
                    <div className='flex items-center xl:col-span-3 sm:col-span-4 col-span-12'>
                        <div className='p-4 bg-gray-300 rounded-full me-3'>
                            <FaTruckMoving className='text-2xl text-gray-500' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Free delivery</h1>
                            <p className='text-gray-500'>Have you ever finally just</p>
                        </div>
                    </div>
                </div>

                <div className='border-2 border-gray-300 bg-white rounded-md lg:p-5 p-2'>
                    <h1 className='font-bold text-xl'>Saved for later</h1>
                    <div className='mt-5 grid grid-cols-12 lg:gap-5 gap-2'>
                        <div className='sm:col-span-3 col-span-6'>
                            <div className='border-2 border-gray-300 flex justify-center items-center mb-2 lg:p-5 p-2 rounded-md'>
                                <img src={require('../Cart/image/image 32.png')} alt="" className='h-44' />
                            </div>
                            <h1 className='text-2xl font-bold'>$99.50</h1>
                            <p className='mt-1 text-gray-500'>GoPro HERO6 4K Action Camera - Black</p>
                            <button className='flex items-center mt-2 justify-center text-blue-500 py-1 px-2 border-2 border-gray-300 rounded-md text-xl'>
                                <MdOutlineShoppingCart className='lg:me-3 me-1 ' />Move to cart
                            </button>
                        </div>
                        <div className='sm:col-span-3 col-span-6'>
                            <div className='border-2 border-gray-300 flex justify-center items-center mb-2 lg:p-5 p-2 rounded-md'>
                                <img src={require('../Cart/image/image 22.png')} alt="" className='h-44' />
                            </div>
                            <h1 className='text-2xl font-bold'>$99.50</h1>
                            <p className='mt-1 text-gray-500'>GoPro HERO6 4K Action Camera - Black</p>
                            <button className='flex items-center mt-2 justify-center text-blue-500 py-1 px-2 border-2 border-gray-300 rounded-md text-xl'>
                                <MdOutlineShoppingCart className='lg:me-3 me-1 ' />Move to cart
                            </button>
                        </div>
                        <div className='sm:col-span-3 col-span-6'>
                            <div className='border-2 border-gray-300 flex justify-center items-center mb-2 lg:p-5 p-2 rounded-md'>
                                <img src={require('../Cart/image/image 34.png')} alt="" className='h-44' />
                            </div>
                            <h1 className='text-2xl font-bold'>$99.50</h1>
                            <p className='mt-1 text-gray-500'>GoPro HERO6 4K Action Camera - Black</p>
                            <button className='flex items-center mt-2 justify-center text-blue-500 py-1 px-2 border-2 border-gray-300 rounded-md text-xl'>
                                <MdOutlineShoppingCart className='lg:me-3 me-1 ' />Move to cart
                            </button>
                        </div>
                        <div className='sm:col-span-3 col-span-6'>
                            <div className='border-2 border-gray-300 flex justify-center items-center mb-2 lg:p-5 p-2 rounded-md'>
                                <img src={require('../Cart/image/image 35.png')} alt="" className='h-44' />
                            </div>
                            <h1 className='text-2xl font-bold'>$99.50</h1>
                            <p className='mt-1 text-gray-500'>GoPro HERO6 4K Action Camera - Black</p>
                            <button className='flex items-center mt-2 justify-center text-blue-500 py-1 px-2 border-2 border-gray-300 rounded-md text-xl'>
                                <MdOutlineShoppingCart className='lg:me-3 me-1' />Move to cart
                            </button>
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
            </div>
            <Footer />
        </>

    )
}

export default Cart