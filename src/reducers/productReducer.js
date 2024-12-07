export const initialSttate = {
	products: [],
};

export const productReducer = (state, action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return {
				...state,
				products: action.payload,
			};

		case "ADD_PRODUCT":
			return {};

		case "UPDATE_PRODUCT":
			return {};

		case "REMOVE_PRODUCT":
			return {};

		default:
			return state;
	}
};

// export default productReducer;
