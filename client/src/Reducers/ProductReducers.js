import { combineReducers } from "@reduxjs/toolkit";
import { productSlice } from "../slices/ProductSlice";

const productReducers = combineReducers({
    product: productSlice.reducer // Use '.reducer' to access the reducer from the slice
});

export default productReducers;
