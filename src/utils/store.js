import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import overlaySlice from "./overlaySlice";


const store = configureStore({
	reducer: {
		cart: cartSlice,
		overlay: overlaySlice,
	}
})

export default store;
