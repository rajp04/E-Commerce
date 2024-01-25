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
    getUserData: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    getUserDataLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUserDataFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
})

export const { getUserData, getUserDataLoading, getUserDataFail } = userSlice.actions;
export default userSlice.reducer