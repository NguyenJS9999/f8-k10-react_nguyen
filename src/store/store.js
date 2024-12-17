import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import appReducer from "../features/app/appSlice";

const store = configureStore({
	reducer: {
		app: appReducer,
		products: productReducer,
	},
});

export default store;
