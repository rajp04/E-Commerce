/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoStar, IoStarOutline } from "react-icons/io5";
import Header from '../Header';
import Footer from '../Footer';
import Filter1 from './Filter1';

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
                        <Filter1 />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Filter



