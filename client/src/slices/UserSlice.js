import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    loading: false,
    error: null,
  };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserDataStart: (state) => {
          state.loading = true;
          state.error = null;
        },
        getUserDataSuccess: (state, action) => {
          state.loading = false;
          state.userData = action.payload;
        },
        getUserDataFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      },
})

export const { getUserDataStart, getUserDataSuccess, getUserDataFailure } = userSlice.actions;
export default userSlice.reducer