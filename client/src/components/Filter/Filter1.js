import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { BsDot } from 'react-icons/bs';
import { IoStar, IoStarOutline } from 'react-icons/io5';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { toast } from "react-toastify";

function Filter1() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState();
    const [pageSize] = useState(10);
    const totalItems = data ? data.total : 0;
    const totalPages = Math.ceil(totalItems / pageSize);
    const userId = localStorage.getItem("id");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/api/v1/product/product?page=${currentPage}&size=${pageSize}`);
                setData(response.data)
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchData();
    }, [currentPage, pageSize]);

    // Function to handle page change
    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleClick = async (id) => {
        const data = { userId, productId: id };
        // console.log(userId, productId);
        try {
            await axios.post("http://localhost:5555/api/v1/cart/addcart", data);
            toast.success("Product Add Successfully")
        } catch (error) {
            console.error("Error making the request:", error.message);
        }
    };

    return (
        <div>
            {data &&
                <div className='border-2 px-5 mb-5 border-gray-300 rounded-md bg-white flex justify-between items-center'>
                    <div className='py-2'>
                        <h1 className='text-xl'>{data.result.length} items in <span className='font-semibold'> Mobile accessory</span></h1>
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

            {data && data.result.map(item => (
                <div className='border-2 border-gray-300 rounded-md bg-white p-5' key={item._id}>
                    <div className='flex items-center space-y-2 flex-row'>
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
                </div>
            ))
            }

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-gray-200 rounded-md my-4 bg-white px-4 py-3 sm:px-6">
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{(currentPage - 1) * pageSize + 1}</span> to <span className="font-medium">{Math.min(currentPage * pageSize, totalItems)}</span> of{' '}
                            <span className="font-medium">{totalItems}</span> results
                        </p>
                    </div>
                    <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            {[...Array(totalPages).keys()].map(n => (
                                <button
                                    key={n + 1}
                                    onClick={() => handlePageChange(n + 1)}
                                    aria-current={currentPage === n + 1 ? 'page' : undefined}
                                    className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === n + 1 ? 'bg-indigo-600 text-white' : 'text-gray-900'} ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                                >
                                    {n + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter1;
