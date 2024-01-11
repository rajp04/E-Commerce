/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

// const items = [
//     { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
//     { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
//     { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
// ]


function Filter() {

    return (
        <>
            <Header />
            <div className='xl:px-28 lg:px-16 md:px-6 sm:px-2 bg-gray-100 py-5'>
                <div className='flex items-center mb-5'>
                    <h1 className='sm:p-0 px-2'>Home</h1>
                    <FaAngleRight className='mt-1 ms-2' />
                </div>

                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-3'>
                        {/* Category */}
                        <hr />
                        <div className='my-3 space-y-2'>
                            <div className='flex justify-between items-center text-xl font-medium mb-3'>
                                <h1>Category</h1>
                                <MdKeyboardArrowUp className='mt-2' />
                            </div>
                            <h1 className='font-medium text-lg text-gray-500'>Mobile accessory</h1>
                            <h1 className='font-medium text-lg text-gray-500'>Electronics</h1>
                            <h1 className='font-medium text-lg text-gray-500'>Smartphones</h1>
                            <h1 className='font-medium text-lg text-gray-500'>Modern tech</h1>
                            <h1 className='text-lg text-blue-500'>See all</h1>
                        </div>

                        {/* Brand */}
                        <hr />
                        <div className='my-3 space-y-2'>
                            <div className='flex justify-between items-center text-xl font-medium mb-3'>
                                <h1>Brand</h1>
                                <MdKeyboardArrowUp className='mt-2' />
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Samsung</h1>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Apple</h1>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Huawei</h1>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Pocco</h1>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Lonovo</h1>
                            </div>
                            <h1 className='text-lg text-blue-500'>See all</h1>
                        </div>

                        {/* Features */}
                        <hr />
                        <div className='my-3 space-y-2'>
                            <div className='flex justify-between items-center text-xl font-medium mb-3'>
                                <h1>Features</h1>
                                <MdKeyboardArrowUp className='mt-2' />
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Metallic</h1>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Plastic cover</h1>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>8GB RAM</h1>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Super Power</h1>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Large Memory</h1>
                            </div>
                            <h1 className='text-lg text-blue-500'>See all</h1>
                        </div>

                        {/* Price Range */}
                        <hr />
                        <div className='my-3 space-y-2'>
                            <div className='flex justify-between items-center text-xl font-medium mb-3'>
                                <h1>Price Range</h1>
                                <MdKeyboardArrowUp className='mt-2' />
                            </div>

                            <div>
                                <input
                                    type="range"
                                    className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-300"
                                    id="customRange1"
                                />
                            </div>

                            <div className='flex flex-col flex-wrap'>
                                <div className='space-y-1 flex flex-col'>
                                    <h1 className='text-xl'>Min</h1>
                                    <input type="text" placeholder='0' className='py-1 px-2 border-2 border-gray-300 outline-none rounded-md' />
                                </div>
                                <div className='space-y-1 flex flex-col'>
                                    <h1 className='text-xl'>Max</h1>
                                    <input type="text" placeholder='999999' className='py-1 px-2 border-2 border-gray-300 outline-none rounded-md' />
                                </div>
                            </div>
                            <div className='border-2 border-gray-300 rounded-md flex items-center justify-center py-1 text-xl'>
                                <button className='text-blue-600  text-center'>Apply</button>
                            </div>
                        </div>


                        {/* Condition */}
                        <hr />
                        <div className='my-3 space-y-2'>
                            <div className='flex justify-between items-center text-xl font-medium mb-3'>
                                <h1>Condition</h1>
                                <MdKeyboardArrowUp className='mt-2' />
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="radio" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Any</h1>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="radio" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Refurbished</h1>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="radio" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Brand new</h1>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="radio" name="" id="" />
                                <h1 className='font-medium text-lg text-gray-500'>Old items</h1>
                            </div>
                        </div>

                        {/* Ratings */}
                        <hr />
                        <div className='my-3 space-y-2'>
                            <div className='flex justify-between items-center text-xl font-medium mb-3'>
                                <h1>Ratings</h1>
                                <MdKeyboardArrowUp className='mt-2' />
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <div className='flex text-orange-500'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <div className='flex text-orange-500'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarOutline />
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <div className='flex text-orange-500'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarOutline />
                                    <IoStarOutline />

                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <div className='flex text-orange-500'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStarOutline />
                                    <IoStarOutline />
                                    <IoStarOutline />
                                </div>
                            </div>
                        </div>
                    </div>






                    <div className='col-span-9'>
                        <div className='border-2 px-5 mb-5 border-gray-300 rounded-md bg-white flex justify-between items-center'>
                            <div className='py-2'>
                                <h1 className='text-xl'>12,911 items in <span className='font-semibold'> Mobile accessory</span></h1>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <input type="checkbox" name="" id="" />
                                <h1>Verified only</h1>
                                <div className='border-2 border-gray-300 flex items-center justify-between w-32 rounded-md px-2 py-1'>
                                    <h1>Featured</h1>
                                    <MdKeyboardArrowUp />
                                </div>
                            </div>
                        </div>

                        <div className='border-2 border-gray-300 rounded-md bg-white p-5 '>
                            <div className='flex items-center space-y-2'>
                                <img src={require('../../image/image 33.png')} alt="" />
                                <div className='ps-2 relative'>
                                    <h1 className='font-medium'>Canon camera EOS 2000, Black 10x zoom</h1>
                                    <h1 className='font-bold text-2xl'> $998.00 <span className='text-gray-500 font-normal text-base'>$1128.00</span></h1>
                                    <div className='flex items-center'>
                                        <IoStar className='text-orange-500' />
                                        <IoStar className='text-orange-500' />
                                        <IoStar className='text-orange-500' />
                                        <IoStar className='text-orange-500' />
                                        <IoStarOutline className='text-orange-500' />
                                        <h1 className='text-orange-500 px-1'>7.5</h1>
                                        <div className='text-gray-500 flex items-center space-x-2'>
                                            <BsDot />
                                            <h1>154 orders</h1>
                                            <BsDot />
                                        </div>
                                        <h1 className='text-green-500'>Free Shipping</h1>
                                    </div>
                                    <p className='text-gray-500 pe-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis iste a, praesentium repellendus sunt deserunt eligendi eos sapiente tempore nihil quis. Quis suscipit id quia velit reiciendis magnam accusantium.</p>
                                    <h1 className='text-blue-500'>View details</h1>
                                    <div className='border-2 border-gray-300 p-2 absolute rounded-md bg-white right-0 top-0'>
                                        <FaRegHeart className='text-blue-500 text-xl' />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Pagination */}
                        <div className="flex items-center justify-between border-t border-gray-200 rounded-md my-4 bg-white px-4 py-3 sm:px-6">
                            <div className="flex flex-1 justify-between sm:hidden">
                                <Link
                                    to="#"
                                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Previous
                                </Link>
                                <Link
                                    to="#"
                                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Next
                                </Link>
                            </div>
                            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                        <span className="font-medium">97</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                        <Link
                                            to="#"
                                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            <span className="sr-only">Previous</span>
                                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                        </Link>
                                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                                        <Link
                                            to="#"
                                            aria-current="page"
                                            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            1
                                        </Link>
                                        <Link
                                            to="#"
                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            2
                                        </Link>
                                        <Link
                                            to="#"
                                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                        >
                                            3
                                        </Link>
                                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                            ...
                                        </span>
                                        <Link
                                            to="#"
                                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                        >
                                            8
                                        </Link>
                                        <Link
                                            to="#"
                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            9
                                        </Link>
                                        <Link
                                            to="#"
                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            10
                                        </Link>
                                        <Link
                                            to="#"
                                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            <span className="sr-only">Next</span>
                                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
export default Filter



