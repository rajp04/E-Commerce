import { getProductData, getProductDataLoading, getProductDataFail } from '../slices/ProductSlice';
import axios from 'axios';

export const ProductData = () => async (dispatch) => {
    dispatch(getProductDataLoading());
    try {
        const response = await axios.get("http://localhost:5555/api/v1/product/product");
        dispatch(getProductData(response.data));
    } catch (error) {
        dispatch(getProductDataFail(error.message));
    }
};
