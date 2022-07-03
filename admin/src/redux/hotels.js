import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotelsList: [],
    roomsList: [],
    isRooms: false,
    isHotels: false,
    success: false,
  },
  reducers: {
    actionStart: (state) => {
      state.isHotels = true;
      state.success = false;
      state.isRooms = false;
    },
    getHotels: (state, action) => {
      state.isHotels = false;
      state.hotelsList = action.payload;
      state.success = true;
    },
    getRooms: (state, action) => {
      state.isRooms = false;
      state.roomsList = action.payload;
      state.success = true;
    },
    hotelsError: (state) => {
      state.isHotels = false;
      state.hotelsList = [];
    },
  },
});

export const { actionStart, getHotels, hotelsError, getRooms } =
  hotelSlice.actions;

export default hotelSlice.reducer;
