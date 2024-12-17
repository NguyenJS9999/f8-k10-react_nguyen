import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProduct, createProduct, editProduct, removeProduct } from "./productActions";

const initialState = {
	products: [],
	productDetail: {},
	loading: false,
	error: null,
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			// Get one
			.addCase(fetchProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchProduct.fulfilled, (state, action) => {
				// console.log('addCase(fetchProduct.fulfilled action: ', action);
				state.loading = false;
				state.productDetail = action.payload;
			})
			.addCase(fetchProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			//  Add
			.addCase(createProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(createProduct.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(createProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			// Update
			.addCase(editProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(editProduct.fulfilled, (state, action) => {
				state.loading = false;
				const index = state.products.findIndex((product) => product.id === action.payload.id);
				if (index !== -1) {
					state.products[index] = action.payload;
				}
			})
			.addCase(editProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			// Delete
			.addCase(removeProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(removeProduct.fulfilled, (state, action) => {
				state.loading = false;
				state.products = state.products.filter((product) => product.id !== action.payload);
			})
			.addCase(removeProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

const productReducer = productSlice.reducer;

export default productReducer;
