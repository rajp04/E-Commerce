import React, { useEffect, useState } from 'react'
import image from "../image/images.jpg";
import { TiArrowLeftThick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";


function ChangePassword() {
    const navigate = useNavigate()
    const [password, setPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    const id = localStorage.getItem("id")

    useEffect(() => {
        if (id === null) navigate("/login");
    })

    const fetchData = async (e) => {
        e.preventDefault()

        const data = { password, newPassword }
        try {
            const response = await axios.patch(`http://localhost:5555/api/v1/users/updatepassword/${id}`, data);

            if (response.data.success === 1) {
                toast("Change Password successfully");
                setNewPassword("")
                setPassword("")
            } else {
                toast("Change Password Failed " + response.data.message);
            }
        } catch (error) {
            toast(error);
        }
    };

    return (
        <div className="flex flex-col px-4 items-center  py-10 bg-cover bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${image})`, height: "100vh" }}
        >
            <div className="flex flex-col justify-center rounded-md pb-5 pt-10 px-5 bg-white w-1/3">
                <div className='flex items-center'>
                    <TiArrowLeftThick className='text-4xl me-4 cursor-pointer' onClick={() => navigate("/account")} />
                    <h1 className='font-semibold text-3xl '>Change Password</h1>
                </div>
                <div className='flex flex-col pt-5'>
                    <h1 className='font-semibold text-2xl pb-1'>Password:</h1>
                    <input type="text" className='ps-2 p-1 text-xl font-medium outline-none border-2 rounded-md' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='flex flex-col pt-5'>
                    <h1 className='font-semibold text-2xl pb-1'>New Password:</h1>
                    <input type="text" className='ps-2 p-1 text-xl font-medium outline-none border-2 rounded-md' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className='flex justify-center pt-5'>
                    <button className='border-2 px-4 py-1 border-gray-500 rounded-md mt-3 text-xl font-medium' type='submit' onClick={fetchData}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword