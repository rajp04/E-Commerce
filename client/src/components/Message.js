import React, { useEffect, useState } from 'react'
import { IoSend, IoSearchSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";


function Message() {
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [text, setText] = useState('')
    const id = localStorage.getItem('id')

    useEffect(() => {
        const handleUserMessage = async () => {
            try {
                const result = await axios.get(`http://localhost:5555/api/v1/message/getallmessage`);
                if (result?.data.success === 1) {
                    setData(result.data.result);
                } else {
                    toast("Failed to fetch message sender data " + result.data.message);
                }
            } catch (error) {
                console.log("Error fetching message sender data: " + error);
            }
        };
        handleUserMessage();
    });

    const handleMessage = async () => {
        try {
            const data = { senderId: id, message: text };
            const result = await axios.post('http://localhost:5555/api/v1/message/message', data);
            if (result.data.success === 1) {
                setText('');
            } else {
                toast("Failed to send message:", result.data.message);
            }
        } catch (error) {
            toast("Error sending message:", error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleMessage();
        }
    };

    return (
        <div className='flex h-screen justify-center bg-gray-100'>
            <div className='bg-white w-9/12 border-x-2'>
                <div className='py-1 flex items-center justify-between px-5 bg-gray-200 shadow'>
                    <div className='flex items-center space-x-4'>
                        <FaCircleArrowLeft className='text-4xl cursor-pointer' onClick={() => navigate("/")} />
                        <div>
                            <h1 className='font-semibold text-xl'>E-Commerce</h1>
                            <h1 className='text-green-500'>online</h1>
                        </div>
                    </div>
                    <div className='flex space-x-5 text-2xl font-bold'>
                        <IoSearchSharp />
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className='overflow-y-scroll h-5/6 relative pt-2 px-2'>
                    {data && data.map((item, index) => (
                        <>
                            {
                                item.senderId === id ?
                                    <div className='w-full'>
                                        <div className='w-[75%] float-right flex flex-col items-end'>
                                            <h1 key={index + item._id} className='bg-blue-500 float-right w-fit rounded-xl text-2xl py-1 px-3 mt-2 text-white '>{item.message}</h1>
                                        </div>
                                    </div>
                                    : <>
                                        {item.receiverId === id ?
                                            <div className='w-full'>
                                                <div className='w-[75%] flex flex-col'>
                                                    <h1 key={index + item._id} className='bg-blue-500 w-fit rounded-xl  text-2xl py-1 mt-2 px-3 text-white'>{item.message}</h1>
                                                </div>
                                            </div> : <></>
                                        }
                                    </>
                            }
                        </>
                    ))}
                </div>
                < div className='absolute  inset-x-0 mx-52 bottom-2 border-gray-500 flex border-2 rounded-full bg-white' >
                    <h1 className='border-2 rounded-full bg-gray-400  h-12 w-12 text-center text-4xl cursor-pointer'>+</h1>
                    <input type="text" className='w-full h-12 outline-none ms-2 text-2xl' placeholder='Enter Your Message' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} />
                    <IoSend className='border-2 rounded-full bg-gray-400 p-3 h-12 w-12 cursor-pointer' onClick={() => handleMessage()} type='submit' />
                </ div>
            </div>
        </div>
    )
}

export default Message


