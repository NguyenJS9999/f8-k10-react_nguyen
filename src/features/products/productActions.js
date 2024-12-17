import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from "../../services/productServices";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	return await getAllProducts();
});

export const fetchProduct = createAsyncThunk("products/fetchProduct", async (id) => {
	console.log('fetchProduct id: ', id);
	return await getOneProduct(id);
});

export const createProduct = createAsyncThunk("products/createProduct", async (product) => {
	return await addProduct(product);
});

export const editProduct = createAsyncThunk("products/editProduct", async ({ id, product }) => {
	console.log('editProduct  id, product : ',  id, product );
	return await updateProduct(id, product);
});

export const removeProduct = createAsyncThunk("products/removeProduct", async (id) => {
	await deleteProduct(id);
	return id;
});
