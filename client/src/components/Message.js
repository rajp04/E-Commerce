import React from 'react'
import { IoSend, IoSearchSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

function Message() {
    return (
        <div className='flex h-screen justify-center bg-gray-100'>
            <div className='bg-white w-9/12 border-x-2'>
                <div className='py-1 flex items-center justify-between px-5 bg-gray-200 shadow'>
                    <div>
                        <h1 className='font-semibold text-xl'>E-Commerce</h1>
                        <h1 className='text-green-500'>online</h1>
                    </div>
                    <div className='flex space-x-5 text-2xl font-bold'>
                        <IoSearchSharp />
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className='overflow-y-scroll h-5/6 relative pt-2'>
                    <div className='flex flex-col '>
                        <h1 className='ms-3 w-fit mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500'>Who are you</h1>
                        <h1 className='ms-3 w-fit mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500'>Who are you</h1>
                        <h1 className='ms-3 w-fit mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500'>Who are yojbyfgjnkkgfyhjnku</h1>
                    </div>
                    <div className='float-right flex flex-col items-end w-1/2'>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello dknkbbjn </h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                        <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>Hello</h1>
                    </div>
                </div>
                < div className='absolute  inset-x-0 mx-52 bottom-2 border-gray-500 flex border-2 rounded-full bg-white' >
                    <h1 className='border-2 rounded-full bg-gray-400  h-12 w-12 text-center text-4xl cursor-pointer'>+</h1>
                    <input type="text" className='w-full h-12 outline-none ms-2 text-2xl' placeholder='Enter Your Message' />
                    <IoSend className='border-2 rounded-full bg-gray-400 p-3 h-12 w-12 cursor-pointer' />
                </ div>
            </div>
        </div>
    )
}

export default Message


