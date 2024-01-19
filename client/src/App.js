import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import View from './components/Views/View'
import Cart from './components/Cart/Cart'
import Filter from './components/Filter/Filter'
import Account from './components/Account'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Dashboard from './components/Admin/Dashboard.js'
import Homes from './components/Admin/Home.js'
import User from './components/Admin/User.js'
import Product from './components/Admin/Product.js'
import AddProduct from './components/Admin/AddProduct.js'
import OrderHistory from './components/Admin/OrderHistory.js'
import ProductList from './components/Admin/ProductList.js'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/view' element={<View />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/filter' element={<Filter />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/account' element={<Account />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/admin/' element={<Dashboard />} >
                    <Route path='' element={<Homes />} />
                    <Route path='user' element={<User />} />
                    <Route path='product' element={<Product />} />
                    <Route path='addproduct' element={<AddProduct />} />
                    <Route path='productlist' element={<ProductList />} />
                    <Route path='orderhistory' element={<OrderHistory />} />
                </Route>

            </Routes>
        </>
    )
}

export default App
