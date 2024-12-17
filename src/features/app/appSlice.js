import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	toasts: [] // Danh sách toast
};
const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		addToast: (state, action) => {
			state.toasts.push({
				id: new Date().getTime(), // ID duy nhất
				...action.payload
			});
		},
		removeToast: (state, action) => {
			state.toasts = state.toasts.filter(
				toast => toast.id !== action.payload
			);
		},
		clearToasts: state => {
			state.toasts = [];
		}
	}
});

export const { addToast, removeToast, clearToasts } = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;