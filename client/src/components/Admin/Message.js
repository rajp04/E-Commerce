import React, { useEffect, useState } from 'react';
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import { toast } from "react-toastify";

function Message() {
    const [message, setMessage] = useState([]);
    const [user, setUser] = useState([]);
    const [text, setText] = useState('');
    const [ids, setIds] = useState('');

    // All User get
    useEffect(() => {
        const handleUser = async () => {
            try {
                const result = await axios.get('http://localhost:5555/api/v1/users/alluserdata');
                setUser(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        handleUser();
    });

    // All Message Get
    useEffect(() => {
        const handleUserMessage = async () => {
            try {
                const result = await axios.get(`http://localhost:5555/api/v1/message/getallmessage`);
                if (result?.data.success === 1) {
                    setMessage(result.data.result);
                } else {
                    toast("Failed to fetch message sender data " + result.data.message);
                }
            } catch (error) {
                console.log("Error fetching message sender data: " + error);
            }
        };
        handleUserMessage();
    });

    // Message Send 
    const handleMessage = async () => {
        try {
            const data = { receiverId: ids, message: text };
            const result = await axios.post('http://localhost:5555/api/v1/message/message', data);
            if (result.data.success === 1) {
                // setRefresh(Math.random());
                setText('');
            } else {
                toast("Failed to send message: " + result.data.message);
            }
        } catch (error) {
            toast.error("Error sending message: " + error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleMessage();
        }
    };


    return (
        <div className='w-full h-screen flex flex-row pt-20 relative'>
            <div className='basis-3/4 left-0 overflow-y-scroll border-e-2 pb-14'>
                <div className='w-full'>
                    <div className='flex flex-col p-2'>
                        {ids && message?.map((item, index) => (
                            <>
                                {item?.senderId === ids ?
                                    <div className='mb-2 w-[75%]'>
                                        <h1 key={index + item._id} className='bg-blue-500 max-w-fit rounded-md text-xl px-2 py-1 text-white'>
                                            {item.message}
                                        </h1>
                                    </div>

                                    : <>
                                        {item?.receiverId === ids ?
                                            <div className='w-full flex justify-end'>
                                                <div className='w-[75%] flex justify-end mb-2'>
                                                    <h1 key={index + item._id} className='py-1 max-w-fit  px-2 rounded-md text-white text-xl bg-blue-500'>
                                                        {item.message}
                                                    </h1>
                                                </div>
                                            </div>
                                            : <></>
                                        }
                                    </>
                                }
                            </>
                        ))}

                    </div>
                </div>
                <div className='h-[8vh] w-[75%] absolute bg-red-500 bottom-0 left-0 overflow-hidden'>
                    <div className='h-full flex items-center justify-center w-full border-2 bg-gray-300 py-2'>
                        <div className='text-2xl px-2'>😊</div>
                        <input type="text" className='w-full h-full outline-none rounded-sm py-1 px-2' placeholder='Type a message'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={handleKeyDown} />
                        <IoSend className='text-2xl mx-2' onClick={() => handleMessage()} />
                    </div>
                </div>
            </div>

            {/* User */}
            <div className='basis-1/4 overflow-y-scroll'>
                <div className='bg-gray-100'>
                    {user &&
                        user
                            .filter(item =>
                                message.some(msg => msg.senderId === item._id)
                            )
                            .map(item => (
                                <div key={item._id} className='flex items-center space-x-3 ps-5 py-5 border-b-2 cursor-pointer border-gray-400' onClick={() => setIds(item._id)}>
                                    <img src={item.avatar} alt="" className='h-16 w-16 rounded-full' />
                                    <div>
                                        <h1 className='text-2xl font-medium'>{item.fullName}</h1>
                                        <h1 className='text-green-500'>Online</h1>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
        </div>
    );
};

export default Message;
