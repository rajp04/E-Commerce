import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../image/images.jpg";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState()
  const [password, setPassword] = useState()

  const user = localStorage.getItem("id")

  useEffect(() => {
    if (user) navigate("/");
  })

  const login = async (e) => {
    e.preventDefault();
    const data = { mobile, password };
    try {
      const response = await axios.post("http://localhost:5555/api/v1/users/login", data);
      if (response) {
        localStorage.setItem('id', response.data.user._id);
        console.log("Login successful");
        navigate("/");
      } else {
        alert("Login failed: Invalid response data");
      }
    } catch (error) {
      alert("An error occurred during login:", error.message);
    }
  };

  return (
    <div
      className="flex flex-col px-4 items-center  py-10 bg-cover bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${image})`, height: "100vh" }}
    >
      <div className="">
        <div className="bg-white flex flex-row mb-5 rounded-md">
          <h1
            className="basis-1/2 text-center  p-2 rounded-s-md cursor-pointer text-lg font-medium"
            onClick={() => navigate("/register")}
          >
            Register
          </h1>
          <h1 className="basis-1/2 text-center p-2 bg-blue-400 rounded-e-md cursor-pointer text-lg font-medium">
            Login
          </h1>
        </div>
        <div className=" rounded-md py-10 px-5 flex-col flex justify-center bg-white">
          <h1 className="font-semibold text-3xl pb-5">Sign in</h1>
          <label htmlFor="" className="font-medium pb-1 pt-2">
            Mobile number
          </label>
          <input
            type="text"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile number"
            className="rounded-md py-1 px-2 placeholder:text-gray-800 border-2 outline-none mb-2"
          />
          <label htmlFor="" className="font-medium pb-1 ">
            Password
          </label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            className="rounded-md py-1 px-2 placeholder:text-gray-800 border-2 outline-none mb-2"
          />
          <h1 className="text-red-500 mb-2 text-end">Forget Password</h1>
          <button className="bg-blue-600 py-1 rounded-md text-white text-xl" type="submit" onClick={login}>
            Login
          </button>
          <button
            className="mt-5 border-2 border-gray-300 rounded-md py-1"
            onClick={() => navigate("/register")}
          >
            Create your account
          </button>
          <h1 className="mt-3">
            By creating an account or logging in, you agree to Brand's{" "}
            <span className="text-blue-500">
              Conditions of Use
              <br className="sm:flex hidden" />
            </span>{" "}
            and <span className="text-blue-500">Privacy Policy</span>.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
