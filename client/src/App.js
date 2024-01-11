import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import View from './components/Views/View'
import Cart from './components/Cart/Cart'
import Filter from './components/Filter/Filter'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/view' element={<View />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/filter' element={<Filter />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    )
}

export default App
