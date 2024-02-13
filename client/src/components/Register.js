import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../image/images.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const signUpSchema = Yup.object({
  fullName: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  mobile: Yup.string().min(10).required("Please enter mobile number"),
  password: Yup.string().min(6).required("Please enter your password"),
});

const initialValues = {
  fullName: "",
  email: "",
  mobile: "",
  password: "",
};

function Register() {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        try {
          const res = await axios.post(
            "http://localhost:5555/api/v1/users/register",
            values
          );

          if (res.data.success === 1) {
            console.log("User registered successfully!", res)
            navigate("/login");
          } else {
            console.log(res.data);
          }
        } catch (error) {
          console.error("Error during   registration:", error);
          console.log("Error during registration. Please try again.");
        }
        action.resetForm();
      },
    });

  console.log(errors);

  return (
    <div
      className="flex flex-col px-4 items-center pt-10 bg-cover bg-fixed bg-no-repeat pb-16"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <div className="bg-white flex flex-row mb-5 rounded-md">
          <h1 className="basis-1/2 text-center bg-blue-400 p-2 rounded-s-md cursor-pointer text-lg font-medium">
            Register
          </h1>
          <h1
            className="basis-1/2 text-center p-2 cursor-pointer text-lg font-medium"
            onClick={() => navigate("/login")}
          >
            Login
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" rounded-md py-10 px-5 flex-col flex justify-center bg-white">
            <h1 className="font-semibold text-3xl pb-7">Create Account</h1>
            <label htmlFor="fullName" className="font-medium pb-1">
              Your name
            </label>
            <input
              type="fullName"
              name="fullName"
              autoComplete="off"
              id="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First and last name"
              className="rounded-md py-1 px-2 placeholder:text-gray-800 border-2 outline-none"
            />
            {errors.fullName && touched.fullName ? (
              <p className="text-red-500 text-sm ps-1">{errors.fullName}</p>
            ) : null}
            <label htmlFor="email" className="font-medium pb-1 pt-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              className="rounded-md py-1 px-2 placeholder:text-gray-800 border-2 outline-none"
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 text-sm ps-1">{errors.email}</p>
            ) : null}
            <label htmlFor="mobile" className="font-medium pb-1 pt-1">
              Mobile number
            </label>
            <input
              type="text"
              name="mobile"
              autoComplete="off"
              id="mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your mobile number"
              className="rounded-md py-1 px-2 placeholder:text-gray-800 border-2 outline-none"
            />
            {errors.mobile && touched.mobile ? (
              <p className="text-red-500 text-sm ps-1">{errors.mobile}</p>
            ) : null}
            <div>

            </div>
            <label htmlFor="password" className="font-medium pb-1 pt-1">
              Password
            </label>
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                name="password"
                autoComplete="off"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="At least 6 characters"
                className="rounded-md py-1 px-2 placeholder:text-gray-800 w-full border-2 outline-none"
              />
              <div onClick={() => setVisible(!visible)} className="absolute right-1 text-2xl top-2">
                {visible ? <BiSolidShow /> : <BiSolidHide />}
              </div>
            </div>
            {errors.password && touched.password ? (
              <p className="text-red-500 text-sm ps-1">{errors.password}</p>
            ) : null}
            <button
              className="bg-blue-600 mt-3 py-1 rounded-md text-white text-xl"
              type="submit"
            >
              Verify mobile number
            </button>
            <h1 className="mt-5">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                {" "}
                Sign in
              </span>
            </h1>
            <h1 className="mt-3">
              By creating an account or logging in, you agree to Brand's{" "}
              <span className="text-blue-500">
                Conditions of Use
                <br className="sm:flex hidden" />
              </span>{" "}
              and <span className="text-blue-500">Privacy Policy</span>.
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
