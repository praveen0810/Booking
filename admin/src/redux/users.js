import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [],
    isUsers: false,
    success: false,
  },
  reducers: {
    actionStart: (state) => {
      state.isUsers = true;
      state.success = false;
    },
    fetchUsers: (state, action) => {
      state.isUsers = false;
      state.usersList = action.payload;
      state.success = true;
    },
    fetchError: (state) => {
      state.isUsers = false;
      state.usersList = [];
      state.success = false;
    },
  },
});

export const { actionStart, fetchUsers, fetchError } = usersSlice.actions;

export default usersSlice.reducer;
