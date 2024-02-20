import React, { useEffect, useState } from 'react'
import { IoSend, IoSearchSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Message() {
    const navigate = useNavigate()
    const [receiver, setReceiver] = useState()
    const [refresh, setRefresh] = useState()
    const [sender, setSender] = useState()
    const [text, setText] = useState('')
    const id = localStorage.getItem('id')


    useEffect(() => {
        const getMessage = async () => {
            try {
                const result = await axios.get(`http://localhost:5555/api/v1/message/getmessage/${id}`);
                if (result.data.success === 1) {
                    setReceiver(result.data.result);
                    // setRefresh(Math.random());
                } else {
                    // Handle error or unexpected response
                    console.error("Failed to fetch message receiver data");
                }
            } catch (error) {
                // Handle network errors or other exceptions
                console.error("Error fetching message receiver data:", error);
            }
        };
        getMessage();
    }, [id, refresh]);

    useEffect(() => {
        const getMessage = async () => {
            try {
                const result = await axios.get(`http://localhost:5555/api/v1/message/getmessagedata/${id}`);
                if (result.data.success === 1) {
                    setSender(result.data.result);
                    // setRefresh(Math.random());
                } else {
                    // Handle error or unexpected response
                    console.error("Failed to fetch message sender data");
                }
            } catch (error) {
                // Handle network errors or other exceptions
                console.error("Error fetching message sender data:", error);
            }
        };
        getMessage();
    }, [id, refresh]);

    const handleMessage = async () => {
        try {
            const data = { senderId: id, message: text };
            const result = await axios.post('http://localhost:5555/api/v1/message/message', data);
            if (result.data.success === 1) {
                setRefresh(Math.random());
                setText('');
                console.log(result);
            } else {
                // Handle error or unexpected response
                console.error("Failed to send message:", result.data.error);
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error("Error sending message:", error);
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
                <div className='overflow-y-scroll h-5/6 relative pt-2'>
                    <div className='flex flex-col '>
                        {receiver && receiver.map((item) => (
                            <h1 className='ms-3 w-fit mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500'>{item.message}</h1>
                        ))}
                    </div>
                    <div className='float-right flex flex-col items-end w-1/2'>
                        {sender && sender.map((item) => (
                            <h1 className='me-3 mb-2 text-white text-3xl rounded-full py-1 px-3 bg-blue-500 w-fit'>{item.message}</h1>
                        ))}
                    </div>
                </div>
                < div className='absolute  inset-x-0 mx-52 bottom-2 border-gray-500 flex border-2 rounded-full bg-white' >
                    <h1 className='border-2 rounded-full bg-gray-400  h-12 w-12 text-center text-4xl cursor-pointer'>+</h1>
                    <input type="text" className='w-full h-12 outline-none ms-2 text-2xl' placeholder='Enter Your Message' value={text} onChange={(e) => setText(e.target.value)} />
                    <IoSend className='border-2 rounded-full bg-gray-400 p-3 h-12 w-12 cursor-pointer' onClick={() => handleMessage()} type='submit' />
                </ div>
            </div>
        </div>
    )
}

export default Message


