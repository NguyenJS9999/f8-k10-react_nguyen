import { createContext, useEffect, useReducer } from "react";
import { productReducer, initialSttate } from "../reducers/productReducer";
import { getAll } from "../services/crudServices";

export const ProductContext = createContext();

const action = {
	type: "Them duong",
	payload: "100g duong",
};

const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productReducer, initialSttate);
	useEffect(() => {
		(async () => {
			const data = await getAll("/products");
			console.log(data);
			dispatch({ type: "SET_PRODUCTS", payload: data });
		})();
	}, []);
	return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
