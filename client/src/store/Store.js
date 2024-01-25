import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducers/UserReducers.js";
// import productReducers from "../Reducers/ProductReducers.js";

const store = configureStore({
    reducer:  userReducer
    
});

export default store;
