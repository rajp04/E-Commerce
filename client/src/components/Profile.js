import React, { useEffect, useState } from 'react'
import image from "../image/images.jpg";
import { TiArrowLeftThick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState()

    const id = localStorage.getItem("id")

    useEffect(() => {
        if (id === null) navigate("/login");
    })

    const fetchData = async (e) => {
        e.preventDefault()

        const data = { fullName, email, mobile }
        try {
            const response = await axios.patch(`http://localhost:5555/api/v1/users/updateuser/${id}`, data);

            if (response.data) {
                window.location.reload();
                console.log("Profile updated successfully");
            } else {
                console.log("Invalid data");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col px-4 items-center  py-10 bg-cover bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${image})`, height: "100vh" }}
        >
            <div className="flex flex-col justify-center rounded-md pb-5 pt-10 px-5 bg-white w-1/3">
                <div className='flex items-center'>
                    <TiArrowLeftThick className='text-4xl me-4 cursor-pointer' onClick={() => navigate("/")} />
                    <h1 className='font-semibold text-3xl '>Profile</h1>
                </div>
                <div className='flex flex-wrap items-center mt-8'>
                    <h1 className='text-xl font-semibold'>Name: </h1>
                    <input type="text" className='ps-2 text-xl font-medium outline-none' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <hr className='h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
                <div className='flex items-center'>
                    <h1 className='text-xl font-semibold'>Email: </h1>
                    <input type="text" className='ps-2 text-xl font-medium outline-none' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <hr className='h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
                <div className='flex items-center'>
                    <h1 className='text-xl font-semibold'>Mobile Number: </h1>
                    <input type="text" className='ps-2 text-xl font-medium outline-none' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                <hr className='h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
                <div className='flex justify-center'>
                    <button className='border-2 px-4 py-1 border-gray-500 rounded-md mt-3 text-xl font-medium' type='submit' onClick={fetchData}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default Profile