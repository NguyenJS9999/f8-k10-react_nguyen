const inititalState = {
	count: 0,
};
export const countReducer = (state = inititalState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				count: state.count + 1,
			};

		case "ADD":
			return {
				...state,
				count: state.count + action.payload,
			};

		case "DECREMENT":
			return {
				...state,
				count: state.count - 1,
			};

		default:
			return state;
	}
};
