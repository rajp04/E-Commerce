import { combineReducers } from '@reduxjs/toolkit';
import userSlice from '../slices/UserSlice';

const userReducer = combineReducers({
    user: userSlice
});

export default userReducer;
