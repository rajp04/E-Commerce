import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaArrowCircleLeft } from "react-icons/fa";

function Address() {
    const location = useLocation()
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState(location?.state?.data?.firstName)
    const [lastName, setLastName] = useState(location?.state?.data?.lastName)
    const [email, setEmail] = useState(location?.state?.data?.email)
    const [mobile, setMobile] = useState(location?.state?.data?.mobile)
    const [country, setCountry] = useState(location?.state?.data?.country)
    const [streetAddress, setStreetAddress] = useState(location?.state?.data?.streetAddress)
    const [city, setCity] = useState(location?.state?.data?.city)
    const [state, setState] = useState(location?.state?.data?.state)
    const [zip, setZip] = useState(location?.state?.data?.zip)

    const id = localStorage.getItem("id");

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async (amount) => {

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { firstName, lastName, email, mobile, country, streetAddress, city, state, zip };

        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        if (!res) {
            alert("you are offline");
            return;
        }

        const option = {
            key: "rzp_test_h8oCH07ToOB8X5",
            currency: "INR",
            amount: 100,    
            name: "PhoneX",
            description: "Thanks for buying products from the our website",
            image: "",
            handler: async function (response) {
                try {
                    if (location.state && location.state.data) {
                        const response = await axios.put(`http://localhost:5555/api/v1/address/updateaddress/${id}`, data);
                        if (response.data.success === 1) {
                            console.log("Address update successful");
                        } else {
                            alert("Address failed: " + response.data.message);
                        }
                    } else {
                        const response = await axios.post(`http://localhost:5555/api/v1/address/address/${id}`, data);
                        if (response) {
                            console.log("Address add successful");
                        } else {
                            alert("Address failed " + response.data.message);
                        }
                    }
                } catch (error) {
                    alert("An error occurred during Address: " + error.message);
                }
            },
            prefill: {
                name: "hello",
            },
        };

        const paymentObject = new window.Razorpay(option);
        paymentObject.open();
    }

    return (

        <div className="border-2 w-3/4 p-5 m-auto border-gray-900/10 pb-12">
            <div className='flex items-center space-x-3'>
                <FaArrowCircleLeft className='text-3xl cursor-pointer' onClick={() => navigate("/cart")} />
                <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none text-lg px-2 sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none text-lg px-2 sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none text-lg px-2 sm:leading-6"
                        />
                    </div>
                </div>


                <div className="sm:col-span-2">
                    <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                        Mobile Number
                    </label>
                    <div className="mt-2">
                        <input
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            id="mobile"
                            name="mobile"
                            type="mobile"
                            autoComplete="mobile"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none text-lg px-2 sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                        Street address
                    </label>
                    <div className="mt-2">
                        <input
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none text-lg px-2 sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Country
                    </label>
                    <div className="mt-2">
                        <input
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            id="country"
                            name="country"
                            type="country"
                            autoComplete="country"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none text-lg px-2 sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        City
                    </label>
                    <div className="mt-2">
                        <input
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none text-lg px-2 sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                        State / Province
                    </label>
                    <div className="mt-2">
                        <input
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none text-lg px-2 sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                        ZIP / Postal code
                    </label>
                    <div className="mt-2">
                        <input
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none text-lg px-2 sm:leading-6"
                        />
                    </div>
                </div>
                <div className='flex justify-center col-span-6 items-center'>
                    <button type='submit' className='text-center  px-4 py-1 bg-blue-500 text-white rounded-md text-xl' onClick={handleSubmit}>Payment</button>
                </div>
            </div>
        </div>
    )
}

export default Address
