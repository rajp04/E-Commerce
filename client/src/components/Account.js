/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import images from "../image/images.jpg";
import { useNavigate } from 'react-router-dom';
import Avatar from '../image/avatar.jpg'
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import axios from "axios"

function Account() {

    const [data, setData] = useState([])
    const [avatar, setAvatar] = useState()
    const hiddenFileInput = useRef();
    const navigate = useNavigate()

    const id = localStorage.getItem("id")
    const fData = new FormData()

    useEffect(() => {
        if (!id) {
            navigate("/login");
        }
    },);

    const handleClick = async () => {
        try {
            fData.append("avatar", avatar);

            const result = await axios.patch(`http://localhost:5555/api/v1/users/avatar/${id}`, fData);
            if (result.status === 200) {
                window.location.reload()
                console.log("Avatar Change Successfully");
            } else {
                alert('Fail to change Avatar');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (avatar) {
            handleClick()
        }
    },);

    useEffect(() => {
        const getUserInfo = async () => {
            const result = await axios.get(`http://localhost:5555/api/v1/users/userdata/${id}`);
            if (result.data) {
                setData(result.data.data);
            } else {
                throw new Error("Error in getting user data.");
            }
        }
        getUserInfo();
    }, [id]);

    // console.log(data);

    return (
        <div className="flex flex-col px-4 items-center  py-10 bg-cover bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${images})`, height: "100vh" }}
        >
            <div className="flex flex-col justify-center rounded-md pt-10 pb-5 px-5 bg-white w-1/3">
                <div className='flex justify-center items-center flex-col'>
                    {data.avatar ?
                        <>
                            <img
                                src={data.avatar}
                                alt="Preview"
                                onClick={() => hiddenFileInput.current.click()}
                                style={{ cursor: 'pointer' }}
                                className='w-24 h-24 rounded-full'
                            />
                            <h1 className='font-semibold text-2xl'>{data.fullName}</h1>
                        </>
                        :
                        <>
                            <img
                                src={Avatar}
                                onClick={() => hiddenFileInput.current.click()}
                                alt=""
                                style={{ cursor: 'pointer' }}
                                className='w-24 h-24 rounded-full'
                            />
                            <h1 className='font-semibold text-2xl'>User Name</h1>
                        </>
                    }

                    <input type="file" onChange={(e) => setAvatar(e.target.files[0])} ref={hiddenFileInput} style={{ display: 'none' }} />
                </div>

                <div className='flex items-center space-x-2 pt-3 cursor-pointer' onClick={() => navigate("/profile")}>
                    <FaUser className='text-2xl' />
                    <h1 className='font-medium text-2xl'>Profile</h1>
                </div>
                <hr className='h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
                <div className='flex items-center space-x-2 pt-1'>
                    <IoMdLock className='text-2xl' />
                    <h1 className='font-medium text-2xl cursor-pointer' onClick={() => navigate("/changepassword")}>Change Password</h1>
                </div>
                <hr className='h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
                <div className='flex items-center space-x-2 pt-1'>
                    <IoLogOut className='text-2xl' />
                    <h1 className='font-medium text-2xl cursor-pointer' onClick={() => {
                        localStorage.removeItem("id");
                        navigate("/login")
                    }}>Logout</h1>
                </div>
                <hr className='h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
            </div>
        </div>
    )
}

export default Account


