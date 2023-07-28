import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice({
  name: "overlay",
  initialState: {
    isLoginOpen: false,
    loginFirstName: "",
  },
  reducers: {
    toggleLogin: (state) => {
      state.isLoginOpen = !state.isLoginOpen;
    },
    addLoginFirstName: (state, action) => {
      state.loginFirstName = action.payload;
    },
  },
});

export const { toggleLogin, addLoginFirstName } = overlaySlice.actions;

export default overlaySlice;