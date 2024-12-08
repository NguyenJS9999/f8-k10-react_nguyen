export const initialState = {
	todos: [],
	countAuth: 0,
};

export const appReducer = (state, action) => {
	console.log('appReducer action: ', action);
	console.log('appReducer state: ', state);

	switch (action.type) {
		case 'LOAD_HEADR':
			// Gán trực tiếp mảng từ action.payload vào
			// return { ...state, todos: [...action.payload] };
			return {
				...state,
				todos: state.countAuth + state.payload,
			};
		case 'ADD_TODO':
			// Thêm một todo mới vào danh sách hiện tại
			return { ...state, todos: [...state.todos, action.payload] };
		case 'REMOVE_TODO':
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			};
		default:
			throw new Error(`Unknown action: ${action.type}`);
	}

};
