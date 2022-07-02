import { createSlice } from "@reduxjs/toolkit";
// const getUser = localStorage.getItem("persist:root");
// const userInfo = JSON.parse(getUser);
// const userDetails = JSON.parse(userInfo?.user);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.error = true;
      state.isFetching = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

export default authSlice.reducer;
