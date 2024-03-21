import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../image/images.jpg";
import axios from "axios";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { toast } from "react-toastify";

function ForgetPassword() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState()
  const [password, setPassword] = useState()
  const [otp, setOtp] = useState()
  const [visible, setVisible] = useState(false)

  const handleOtp = async () => {
    const data = { mobile };
    try {
      const response = await axios.patch("http://localhost:5555/api/v1/users/sendotp", data);
      if (response.data.success === 1) {
        toast("Otp Send successful");
      } else {
        toast("Otp Send failed: " + response.data.message);
      }
    } catch (error) {
      toast("An error occurred during login:", error.message);
    }
  };

  const handleConfirm = async () => {
    const data = { mobile, otp, password };
    try {
      const response = await axios.post("http://localhost:5555/api/v1/users/forgetpassword", data);
      if (response.data.success === 1) {
        toast("Password reset successful");
        navigate("/login");
      } else {
        toast("Password Reset failed: " + response.data.message);
      }
    } catch (error) {
      toast("An error occurred during login:", error.message);
    }
  };

  return (
    <div
      className="flex flex-col px-4 items-center w-screen justify-center bg-cover bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${image})`, height: "100vh" }}
    >
      <div className="w-1/3 ">
        <div className=" rounded-md py-10 px-5 flex-col flex justify-center bg-white">
          <h1 className="font-semibold text-3xl pb-5">Forget Password</h1>
          <div className="flex w-full space-x-3">
            <div className="flex flex-col w-full">
              <label htmlFor="" className="font-medium pb-1 pt-2">
                Mobile number
              </label>
              <input
                type="number"
                name="mobile"
                autoComplete="off"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter your mobile number"
                className="rounded-md py-1 px-2 placeholder:text-gray-800 border-2 outline-none mb-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium pb-1 pt-2">
                Send Otp
              </label>
              <button className="bg-blue-500 px-3 py-1 rounded-md text-white whitespace-nowrap" onClick={handleOtp}>Verify the mobile</button>
            </div>
          </div>

          <label htmlFor="" className="font-medium pb-1 pt-2">
            Verify otp
          </label>
          <input
            type="number"
            name="otp"
            autoComplete="off"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter your otp"
            className="rounded-md py-1 px-2 placeholder:text-gray-800 border-2 outline-none mb-2"
          />

          <label htmlFor="" className="font-medium pb-1 ">
            Password
          </label>
          <div className="relative">
            <input
              type={visible ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="rounded-md py-1 px-2 w-full placeholder:text-gray-800 border-2 outline-none mb-2"
            />
            <div onClick={() => setVisible(!visible)} className="absolute right-1 text-2xl top-2">
              {visible ? <BiSolidShow /> : <BiSolidHide />}
            </div>
          </div>
          <button className="bg-blue-600 py-1 rounded-md text-white text-xl" type="submit" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
