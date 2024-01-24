import { getUserDataStart, getUserDataSuccess, getUserDataFailure } from '../slices/UserSlice';
import axios from 'axios'; 

export const getUserData = () => async (dispatch) => {
    dispatch(getUserDataStart());

    try {
        const response = await axios.get("http://localhost:5555/api/v1/users/alluserdata");
        dispatch(getUserDataSuccess(response.data));
    } catch (error) {
        dispatch(getUserDataFailure(error.message));
    }
};
