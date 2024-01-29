import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slices/UserSlice.js";
import { productSlice } from "../slices/ProductSlice.js";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        product: productSlice.reducer
    }

});

export default store;
