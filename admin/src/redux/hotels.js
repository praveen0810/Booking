import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotelsList: [],
    isHotels: false,
    success: false,
  },
  reducers: {
    actionStart: (state) => {
      state.isHotels = true;
      state.success = false;
    },
    getHotels: (state, action) => {
      state.isHotels = false;
      state.hotelsList = action.payload;
      state.success = true;
    },
    hotelsError: (state) => {
      state.isHotels = false;
      state.hotelsList = [];
    },
  },
});

export const { actionStart, getHotels, hotelsError } = hotelSlice.actions;

export default hotelSlice.reducer;
