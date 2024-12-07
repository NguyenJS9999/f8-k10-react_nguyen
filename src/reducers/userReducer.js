export const initialSttate = {
	users: [],
};

export const userReducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				users: action.payload,
			};

		case "ADD_USER":
			return {};

		case "UPDATE_USER":
			return {};

		case "REMOVE_USER":
			return {};

		default:
			return state;
	}
};

// export default productReducer;
