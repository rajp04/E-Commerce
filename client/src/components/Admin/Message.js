import React, { useEffect, useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import axios from 'axios';

function Message() {
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
            const data = { receiverId: id, message: text };
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
        <div className='h-screen pt-20'>
            <div className='h-full bg-gray-100'>
                <div className='flex flex-col pt-2 px-2 h-[577px] overflow-scroll'>
                    <div className='w-full'>
                        <div className='w-full float-right flex flex-col items-end'>
                            {receiver && receiver.map((item) => (
                                <h1 className='bg-blue-500 float-right w-fit rounded-xl text-2xl py-1 px-3 mt-2 '>{item.message}</h1>
                            ))}
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='w-full flex flex-col'>
                            {sender && sender.map((item) => (
                                <h1 className='bg-blue-500 w-fit rounded-xl  text-2xl py-1 mt-2 px-3 '>{item.message}</h1>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='bg-gray-500 flex py-3 px-5'>
                    <IoIosAddCircle className='text-5xl text-gray-950' />
                    <div className='flex w-full ps-5'>
                        <input type="text" className='bg-gray-400 rounded-xl px-2 py-2 outline-none text-2xl font-medium w-full placeholder:text-gray-500' placeholder='Type a message' value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                    <IoSend className='text-5xl text-gray-950 p-1 cursor-pointer' onClick={() => handleMessage()} />
                    <BsEmojiSmileFill className='text-5xl text-gray-950 pe-1 ps-2' />
                </div>
            </div>
        </div>
    )
}

export default Message