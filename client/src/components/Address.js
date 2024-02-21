import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaCircleArrowLeft } from "react-icons/fa6";
function Address() {

    const location = useLocation()
    console.log(location);

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState()
    const [country, setCountry] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [postalCode, setPostalCode] = useState()

    const user = localStorage.getItem("id")

    const handleSubmit = async () => {
        try {
            const productId = location.state?.productId?._id;
            if (!productId) {
                console.log("Product ID is not defined.");
                return;
            }

            const order = { firstName, lastName, email, mobile, country, address, city, state, postalCode, productId, userId: user };

            const response = await axios.post(`http://localhost:5555/api/v1/order/order`, order);
            if (response.data.success === 1) {
                console.log(response.data);
                setFirstName('');
                setLastName('');
                setEmail('');
                setMobile('');
                setCountry('');
                setAddress('');
                setCity('');
                setState('');
                setPostalCode('');
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (

        <div className="border-2 w-3/4 p-5 m-auto border-gray-900/10 pb-12">
            <div className='flex items-center space-x-3'>
                <FaCircleArrowLeft className='text-3xl cursor-pointer' onClick={() => navigate("/cart")} />
                <div className='flex flex-col'>
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
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone number
                    </label>
                    <div className="mt-2">
                        <input
                            id="number"
                            name="number"
                            type="number"
                            autoComplete="off"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Country
                    </label>
                    <div className="mt-2">
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2"
                        >
                            <option>India</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                        Street address
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        City
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="city"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                        State / Province
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="region"
                            id="region"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                        ZIP / Postal code
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />
                    </div>
                </div>
                <div className='flex justify-center col-span-6 items-center'>
                    <button type='submit' className='text-center  px-4 py-1 bg-blue-500 text-white rounded-md text-xl' onClick={() => handleSubmit()}>Payment</button>
                </div>
            </div>
        </div>
    )
}

export default Address