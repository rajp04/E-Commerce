import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../image/images.jpg";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const login = async (e) => {
        e.preventDefault();
        const data = { email, password };
        try {
            const response = await axios.post("http://localhost:5555/api/v1/admin/login", data);

            if (response.data.success === 1) {
                console.log(response);
                sessionStorage.setItem('admin', JSON.stringify(response.data.admin._id));
                navigate("/admin");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert("An error occurred during login:", error.message);
        }
    };

    return (
        <div
            className="flex flex-col px-4 items-center  py-10 bg-cover bg-fixed bg-no-repeat "
            style={{ backgroundImage: `url(${image})`, height: "100vh" }}
        >
            <div className="">
                <div className=" rounded-md py-10 px-5 flex-col flex justify-center w-96 bg-white">
                    <h1 className="font-semibold text-3xl pb-5">Admin Login</h1>
                    <label htmlFor="" className="font-medium pb-1 pt-2">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="rounded-md py-1 px-2 placeholder:text-gray-800 border-2 outline-none mb-2"
                    />
                    <label htmlFor="" className="font-medium pb-1 ">
                        Password
                    </label>
                    <input
                        type="text"
                        name="password"
                        value={password}
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="At least 6 characters"
                        className="rounded-md py-1 px-2 placeholder:text-gray-800 border-2 outline-none mb-2"
                    />
                    <button className="bg-blue-600 py-1 rounded-md text-white text-xl" type="submit" onClick={login}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
