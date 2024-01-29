import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: null,
    loading: false,
    error: null,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProductData: (state, action) => {
            state.productData = action.payload;
            state.loading = false;
        },
        getProductDataLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        getProductDataFail: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { getProductData, getProductDataLoading, getProductDataFail } = productSlice.actions;
