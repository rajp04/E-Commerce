import { getUserData, getUserDataLoading, getUserDataFail } from '../slices/UserSlice.js';
import axios from 'axios';

export const UserData = () => async (dispatch) => {
    dispatch(getUserDataLoading());

    try {
        const response = await axios.get("http://localhost:5555/api/v1/users/alluserdata");
        dispatch(getUserData(response.data));
    } catch (error) {
        dispatch(getUserDataFail(error.message));
    }
};
