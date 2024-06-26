/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaTruckMoving } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { MdMessage, MdOutlineShoppingCart } from "react-icons/md";
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

function Cart() {
    const [cart, setCart] = useState()
    const [subTotal, setSubTotal] = useState(0)
    const [total, setTotal] = useState(0)
    const [save, setSave] = useState()
    const [qty, setQTY] = useState({})
    const [address, setAddress] = useState()
    const [q] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [referesh, setReferesh] = useState()
    const naviget = useNavigate()
    const userId = localStorage.getItem("id")

    // Get Cart Item
    useEffect(() => {
        const getCart = async () => {
            try {
                const result = await axios.get(`http://localhost:5555/api/v1/cart/getcart/${userId}`);
                setCart(result.data.result);
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };
        getCart();
    }, [userId, referesh]);


    // Single Cart Item Delete
    const handleDelete = async (id) => {

        try {
            await axios.delete(`http://localhost:5555/api/v1/cart/deletecart/${id}`);
            setReferesh(Math.random());
            toast("Remove successfully")
        } catch (error) {
            console.log(error);
        }
    }


    // Remove All Cart Item
    const handleAllDelete = async (userId) => {

        try {
            const response = await axios.delete(`http://localhost:5555/api/v1/cart/deleteallitem/${userId}`)
            setReferesh(Math.random());
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }


    // Get Save For Later Data
    useEffect(() => {
        const getSave = async () => {
            try {
                const result = await axios.get(`http://localhost:5555/api/v1/cart/getsave/${userId}`);
                setSave(result.data.result);
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };
        getSave();
    }, [userId, referesh]);


    // Delete Save For Later Item
    const handleSaveDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5555/api/v1/cart/deletesave/${id}`);
            setReferesh(Math.random());
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }


    // Add to Cart Item
    const handleCart = async (productId) => {
        const data = { userId, productId };

        try {
            await axios.post("http://localhost:5555/api/v1/cart/addcart", data);
            setReferesh(Math.random());
            toast.success("Add Successfully")
        } catch (error) {
            console.error("Error making the request:", error.message);
        }
    };


    // Update the qty
    useEffect(() => {
        const updateQty = async (id, newQty) => {
            try {
                const data = { qty: newQty };
                const response = await axios.patch(`http://localhost:5555/api/v1/product/updateqty/${id}`, data);
                setQTY(prevQty => ({ ...prevQty, [id]: response.data.qty }));
                setReferesh(Math.random())
                console.log(response);
            } catch (error) {
                console.error('Error updating quantity:', error);
            }
        };

        if (cart) {
            cart.forEach(item => {
                if (item.productId && qty[item.productId._id] !== undefined) {
                    updateQty(item.productId._id, qty[item.productId._id]);
                }
            });
        }
    }, [cart, qty, referesh]);

    const handleQtyChange = (itemId, newQty) => {
        setQTY(prevQty => ({ ...prevQty, [itemId]: newQty }));
    };


    // total price of the cart
    useEffect(() => {
        if (cart) {
            let sum = 0
            for (const a of cart) {
                let z = a.productId.price * a.productId.qty
                sum += z
            }
            setSubTotal(sum)
        }
    }, [cart, referesh])


    useEffect(() => {
        const calculateTotal = subTotal - 60 + 60
        setTotal(calculateTotal)
    })

    useEffect(() => {
        const getAddress = async () => {
            try {
                const result = await axios.get(`http://localhost:5555/api/v1/address/addressby/${userId}`);
                setAddress(result.data);
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };
        getAddress();
    }, [])


    // Order Api
    // const handleOrder = async () => {
    //     try {
    //         const order = { data: cart && cart.map(item => item.productId._id), userId: userId };
    //         console.log(order);
    //         const response = await axios.post(`http://localhost:5555/api/v1/order/order`, order);
    //         console.log(response.data);
    //         if (response.data.success === 1) {
    //             // You can uncomment this block if you want to perform additional actions after successful order
    //             try {
    //                 const deleteResponse = await axios.delete(`http://localhost:5555/api/v1/cart/deleteallitem/${userId}`);
    //                 setReferesh(Math.random());
    //                 console.log(deleteResponse);
    //             } catch (deleteError) {
    //                 console.log(deleteError);
    //             }
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    return (
        <>
            <Header />
            <div className='xl:px-28 lg:px- 16 md:px-6 sm:px-2 bg-gray-100 py-5'>
                {cart &&
                    <h1 className='font-bold text-2xl pb-5'>My Cart ({cart.length})</h1>
                }
                <div className='grid grid-cols-12 gap-5' >
                    <div className='border-2 lg:col-span-9 sm:col-span-8 col-span-12 border-gray-300 bg-white rounded-md p-5'>
                        {cart && cart.map((item) => {
                            const p = item.productId
                            return (
                                <>
                                    <div className='justify-between sm:flex mb-5 pt-2' key={item._id}>
                                        <div className='sm:flex justify-center items-center'>
                                            <div className='border-2 border-gray-300 p-1 rounded-md flex items-center justify-center w-fit'>
                                                <img src={p.image} alt="" className='w-40 h-40' />
                                            </div>
                                            <div className='ms-3'>
                                                <h1 className='font-semibold text-xl mb-1'>{p.productName}</h1>
                                                <p className='text-gray-500'>Size: Medium, Color: Blue, Material: Plastic</p>
                                                <p className='text-gray-500 mb-2'>Seller: Artel Market</p>
                                                <div className='flex'>
                                                    <button className='text-red-500 font-medium border-2 py-1 px-2 rounded-md' onClick={() => handleDelete(item._id)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex items-center mt-3'>
                                                <h1 className='font-semibold text-xl mb-3 text-end'>Price: </h1>
                                                <h1 className='font-semibold text-xl mb-3 text-end'>{p.price}</h1>
                                            </div>
                                            <div className='flex flex-wrap items-center'>
                                                <h1 className='font-bold text-2xl pe-2'>Qty:</h1>
                                                <select
                                                    value={qty[item.productId._id] || ''}
                                                    onChange={(e) => handleQtyChange(item.productId._id, e.target.value)}
                                                    className='border-2 rounded-md border-gray-100 p-1 font-bold text-xl outline-none'>
                                                    {q.map((e, i) => (
                                                        <option key={i} value={e}>{e}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div >
                                    <hr />
                                </>
                            )
                        })}

                        <div className='flex justify-between items-center mt-5'>
                            <button className='flex justify-center items-center space-x-3 bg-blue-500 text-white py-1 px-3 rounded-md'>
                                <FaArrowLeft />
                                <h1 className='text-xl' onClick={() => naviget("/filter")}>Back to shop</h1>
                            </button>
                            <button className='border-2 border-gray-300 text-blue-500 py-1 px-3 rounded-md text-xl' onClick={() => handleAllDelete(cart[0].userId)}>
                                Remove All
                            </button>
                        </div>
                    </div>
                    <div className='lg:col-span-3 sm:col-span-4 col-span-12'>
                        <div className='border-2 border-gray-300 bg-white rounded-md p-5 mb-5'>
                            <h1 >Have a coupon?</h1>
                            <div className='mt-2 flex flex-wrap items-center justify-center'>
                                <input type="text" className='border-2 border-gray-300 outline-none px-2 rounded-md w-full py-1' placeholder='Add coupon' />
                                <button className='border-2 py-1 px-3 text-blue-500 font-medium  rounded-md mt-2'>Apply</button>
                            </div>
                        </div>
                        <div className='border-2 border-gray-300 bg-white rounded-md p-5'>
                            <div className='flex justify-between pb-1'>
                                <h1>Subtotal:</h1>
                                <h1>&#8377; {subTotal}</h1>
                            </div>
                            {cart?.length > 0 ? (
                                <>
                                    <div className='flex justify-between pb-1'>
                                        <h1>Discount:</h1>
                                        <h1 className='text-red-500'>- &#8377; 60.00</h1>
                                    </div>
                                    <div className='flex justify-between pb-1'>
                                        <h1>Tax:</h1>
                                        <h1 className='text-green-500'>+ &#8377; 60.00</h1>
                                    </div>
                                </>
                            ) : (
                                <> <div className='flex justify-between pb-1'>
                                    <h1>Discount:</h1>
                                    <h1 className='text-red-500'>- &#8377; 00</h1>
                                </div>
                                    <div className='flex justify-between pb-1'>
                                        <h1>Tax:</h1>
                                        <h1 className='text-green-500'>+ &#8377; 00</h1>
                                    </div>
                                </>
                            )}
                            <hr className='my-3' />
                            <div className='flex justify-between pb-2 font-bold text-lg'>
                                <h1>Total:</h1>
                                <h1>+ &#8377; {total}</h1>
                            </div>
                            {cart?.length > 0 ? (
                                <div className='flex items-center text-white cursor-pointer justify-center bg-green-600 rounded-md py-1 ' onClick={() => naviget("/address", { state: address })}>
                                    <button className='text-xl font-semibold' >Checkout</button>
                                </div>
                            ) : (<div className='flex items-center text-white cursor-not-allowed justify-center bg-green-600 rounded-md py-1 opacity-50' disabled>
                                <button className='text-xl font-semibold cursor-not-allowed' disabled>Checkout</button>
                            </div>)
                            }
                        </div>
                    </div>
                </div>


                <div className='my-5 grid grid-cols-12 gap-5 sm:px-0 px-2'>
                    <div className='flex items-center xl:col-span-3 sm:col-span-4 col-span-12'>
                        <div className='p-4 bg-gray-300 rounded-full me-3'>
                            <IoMdLock className='text-2xl text-gray-500' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Secure payment</h1>
                            <p className='text-gray-500'>Have you ever finally just</p>
                        </div>
                    </div>
                    <div className='flex items-center xl:col-span-3 sm:col-span-4 col-span-12'>
                        <div className='p-4 bg-gray-300 rounded-full me-3'>
                            <MdMessage className='text-2xl text-gray-500' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Customer support</h1>
                            <p className='text-gray-500'>Have you ever finally just</p>
                        </div>
                    </div>
                    <div className='flex items-center xl:col-span-3 sm:col-span-4 col-span-12'>
                        <div className='p-4 bg-gray-300 rounded-full me-3'>
                            <FaTruckMoving className='text-2xl text-gray-500' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Free delivery</h1>
                            <p className='text-gray-500'>Have you ever finally just</p>
                        </div>
                    </div>
                </div>

                <div className='border-2 border-gray-300 bg-white rounded-md lg:p-5 p-2'>
                    <h1 className='font-bold text-xl'>Saved for later</h1>
                    <div className='mt-5 grid grid-cols-12 lg:gap-5 gap-2'>
                        {save && save.map((e) => {
                            const item = e.productIdForSave
                            return (
                                <div className='sm:col-span-3 col-span-6'>
                                    <div className='border-2 border-gray-300 flex justify-center items-center mb-2 lg:p-5 p-2 rounded-md'>
                                        <img src={item.image} alt="" className='h-44' />
                                    </div>
                                    <h1 className='text-2xl font-bold'>&#8377; {item.price}</h1>
                                    <p className='mt-1 text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis'>{item.description}</p>
                                    <div className='flex items-center justify-between'>
                                        <button className='flex items-center mt-2 justify-center text-blue-500 py-1 px-2 border-2 border-gray-300 rounded-md text-xl' onClick={() => handleCart(item._id)}>
                                            <MdOutlineShoppingCart className='lg:me-3 me-1' />Move to cart
                                        </button>
                                        <button className='flex items-center mt-2 justify-center text-blue-500 py-1 px-2 border-2 border-gray-300 rounded-md text-xl' onClick={() => handleSaveDelete(e._id)}>
                                            <MdDelete className='text-3xl' />
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>



                <div className='my-5 grid grid-cols-12'>
                    <div className='bg-blue-500 col-span-7 sm:p-8 p-2 sm:rounded-s-md'>
                        <h1 className='text-white text-2xl font-semibold'>Super discount on more than 100 USD</h1>
                        <p className='text-gray-200'>Have you ever finally just write dummy info</p>
                    </div>
                    <div className='bg-blue-600 flex justify-end items-center col-span-5 p-5 sm:rounded-e-md'>
                        <div className='bg-orange-400 text-white rounded-md py-1 px-3'>
                            <button className='text-xl'>Shop now</button>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>

    )
}

export default Cart