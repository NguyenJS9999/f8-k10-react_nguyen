export const initialSttate = {
	todos: [],
};

export const todoReducer = (state, action) => {
	switch (action.type) {
		case "SET_TODOS":
			return {
				...state,
				todos: action.payload,
			};

		case "ADD_TODOS":
			return {};

		case "UPDATE_TODOS":
			return {};

		case "REMOVE_TODOS":
			return {};

		default:
			return state;
	}
};

// export default todoReducer;
