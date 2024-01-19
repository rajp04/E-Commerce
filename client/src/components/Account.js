import React, { useRef, useState } from 'react'
import images from "../image/images.jpg";
import { useNavigate } from 'react-router-dom';
import avatar from '../image/avatar.jpg'
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

function Account() {

    const [data, setData] = useState()
    const hiddenFileInput = useRef();

    const navigate = useNavigate()

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const handleChange = (e) => {
        const fileUploaded = e.target.files[0];
        if (fileUploaded) {
            const imageURL = URL.createObjectURL(fileUploaded);
            setData(imageURL);
        }
    };

    return (
        <div className="flex flex-col px-4 items-center  py-10 bg-cover bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${images})`, height: "100vh" }}
        >
            <div className="flex flex-col justify-center rounded-md pt-10 pb-5 px-5 bg-white w-1/3">
                <div className='flex justify-center items-center flex-col'>
                    {data ? (
                        <img src={data} alt="Preview" onClick={handleClick} className='h-28 w-28 rounded-full cursor-pointer' />
                    ) : (
                        <img
                            src={avatar}
                            alt=""
                            onClick={handleClick}
                            className='h-28 w-28 rounded-full cursor-pointer'
                        />
                    )}
                    <input type="file" onChange={handleChange} ref={hiddenFileInput} style={{ display: 'none' }} />
                    <h1 className='font-semibold text-2xl'>User Name</h1>
                </div>
                <div className='flex items-center space-x-2 pt-3 cursor-pointer' onClick={() => navigate("/profile")}>
                    <FaUser className='text-2xl' />
                    <h1 className='font-medium text-2xl'>Profile</h1>
                </div>
                <hr className='h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
                <div className='flex items-center space-x-2 pt-1'>
                    <IoMdLock className='text-2xl' />
                    <h1 className='font-medium text-2xl'>Change Password</h1>
                </div>
                <hr className='h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
                <div className='flex items-center space-x-2 pt-1'>
                    <IoLogOut className='text-2xl' />
                    <h1 className='font-medium text-2xl'>Logout</h1>
                </div>
                <hr className='h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
            </div>
        </div>
    )
}

export default Account


