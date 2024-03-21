import React, { useEffect, useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import { toast } from "react-toastify";

function Message() {
    const [receiver, setReceiver] = useState()
    const [refresh, setRefresh] = useState()
    const [sender, setSender] = useState()
    const [user, setUser] = useState()
    const [text, setText] = useState('')
    const [ids, setIds] = useState()

    // All User get
    useEffect(() => {
        const handleUser = async () => {
            try {
                const result = await axios.get('http://localhost:5555/api/v1/users/alluserdata');
                setUser(result.data)
            } catch (error) {
                console.log(error);
            }
        }
        handleUser()
    }, [refresh])

    // All Message Get
    const handleUserMessage = async (id) => {
        try {
            setIds(id)
            const result = await axios.get(`http://localhost:5555/api/v1/message/getmessagedata/${id}`);
            if (result.data.success === 1) {
                setSender(result.data.result);
                setRefresh(Math.random());
            } else {
                toast("Failed to fetch message sender data " + result.data.message);
            }
        } catch (error) {
            toast("Error fetching message sender data:", error);
        }
        try {
            const result = await axios.get(`http://localhost:5555/api/v1/message/getmessage/${id}`);
            if (result.data.success === 1) {
                setReceiver(result.data.result);
                setRefresh(Math.random());
            } else {
                toast("Failed to fetch message receiver data " + result.data.message);
            }
        } catch (error) {
            toast("Error fetching message receiver data:", error);
        }
    };

    // Message Send 
    const handleMessage = async () => {
        try {
            const data = { receiverId: ids, message: text };
            const result = await axios.post('http://localhost:5555/api/v1/message/message', data);
            if (result.data.success === 1) {
                setRefresh(Math.random());
                setText('');
            } else {
                toast("Failed to send message:", result.data.error);
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
        <div className='h-screen pt-20 flex flex-row'>
            <div className='h-full bg-gray-100 basis-3/4 border-r-2 border-gray-500'>
                <div className='flex flex-col pt-2 px-2 h-[577px] overflow-scroll'>
                    <div className='w-full'>
                        <div className='w-full float-right flex flex-col items-end'>
                            {receiver && receiver.map((item, index) => (
                                <h1 key={index} className='bg-blue-500 float-right w-fit rounded-xl text-2xl py-1 px-3 mt-2 '>{item.message}</h1>
                            ))}
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='w-full flex flex-col'>
                            {sender && sender.map((item, index) => (
                                <h1 key={index} className='bg-blue-500 w-fit rounded-xl  text-2xl py-1 mt-2 px-3 '>{item.message}</h1>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='bg-gray-500 flex py-3 px-5'>
                    <IoIosAddCircle className='text-5xl text-gray-950' />
                    <div className='flex w-full ps-5'>
                        <input
                            type="text"
                            className='bg-gray-400 rounded-xl px-2 py-2 outline-none text-2xl font-medium w-full placeholder:text-gray-500'
                            placeholder='Type a message'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={handleKeyDown} // Add this line
                        />
                    </div>
                    < IoSend className='text-5xl text-gray-950 p-1 cursor-pointer' onClick={() => handleMessage()} />
                    <BsEmojiSmileFill className='text-5xl text-gray-950 pe-1 ps-2' />
                </div>
            </div>
            <div className='bg-gray-100 basis-1/4'>
                {user && user.map((item) => (
                    <div className='flex items-center space-x-3 ps-5 py-5 border-b-2 cursor-pointer border-gray-400' onClick={() => handleUserMessage(item._id)}>
                        <img src={item.avatar} alt="" className='h-16 w-16 rounded-full' />
                        <div>
                            <h1 className='text-2xl font-medium'>{item.fullName}</h1>
                            <h1 className='text-green-500'>Online</h1>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Message