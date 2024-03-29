import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'
import { BsDot } from 'react-icons/bs'
import { IoStar, IoStarOutline } from 'react-icons/io5'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ProductData } from '../../thunks/ProductThunk'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import ReactLoading from "react-loading";
import axios from 'axios'

function Filter1() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [refresh, setRefresh] = useState()
    const productData = useSelector((state) => state.product.productData);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);
    const userId = localStorage.getItem("id");

    useEffect(() => {
        // Use an immediately-invoked function expression (IIFE) for the async function
        (async () => {
            try {
                await dispatch(ProductData());
            } catch (error) {
                // Handle any errors here if needed
                console.error("Error fetching product data:", error);
            }
        })();
    }, [dispatch, refresh]);

    if (loading) {
        return <div className='flex items-center justify-center'>
            <ReactLoading
                type="spinningBubbles"
                color="#0000FF"
                height={100}
                width={50}
            />
        </div>
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleClick = async (id) => {
        const data = { userId, productId: id };
        // console.log(userId, productId);
        try {
            const result = await axios.post("http://localhost:5555/api/v1/cart/addcart", data);
            setRefresh(Math.random())
            console.log(result);
        } catch (error) {
            console.error("Error making the request:", error.message);
        }
    };
    return (
        <>
            {productData &&
                <div className='border-2 px-5 mb-5 border-gray-300 rounded-md bg-white flex justify-between items-center' >
                    <div className='py-2'>
                        <h1 className='text-xl'>{productData.result.length} items in <span className='font-semibold'> Mobile accessory</span></h1>
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
            }

            {productData && productData.result.map(item => (
                <div className='border-2 border-gray-300 rounded-md bg-white p-5' >
                    <div className='flex items-center space-y-2 flex-row' key={item._id}>
                        <img src={item.image} alt="" className='basis-1/4 h-48 w-40 p-4' />
                        <div className='ps-2 relative basis-3/4 cursor-pointer'>
                            <div onClick={() => navigate(`/view/${item._id}`)}>
                                <h1 className='font-medium text-3xl'>{item.productName}</h1>
                                <h1 className='font-bold text-2xl flex items-center py-1'> <FaIndianRupeeSign />{item.price} </h1>
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
                                <p className='text-gray-500 pe-20'>{item.description}</p>
                                <h1 className='text-blue-500'>View details</h1>
                            </div>
                            <button className='text-white py-1 px-3 bg-blue-500 rounded-md' onClick={() => handleClick(item._id)} >Add to Cart</button>
                        </div>
                    </div>
                </div >
            ))
            }


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
                            <Link
                                to="#"
                                aria-current="page"
                                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                1
                            </Link>
                            <Link
                                to="/2"
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
        </>
    )
}

export default Filter1