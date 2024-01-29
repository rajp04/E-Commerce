import React, { useEffect } from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import { useNavigate } from 'react-router-dom'

function Order() {
    const navigate = useNavigate()

    const user = localStorage.getItem('id')
    useEffect(() => {
        if (!user) {
            return navigate('/login')
        }
    },)
    return (
        <>
            <Header />
            <div>Order</div>
            <Footer />
        </>
    )
}

export default Order