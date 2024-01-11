// nanoid use for unique id
import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    products: [{ id: 1, text: 'Hello World' }]
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {}
})


export default productSlice.reducer