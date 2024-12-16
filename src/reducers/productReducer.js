import {
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	SET_PRODUCTS,
	UPDATE_PRODUCT
} from '../actions/productActions';

const inititalState = {
	products: []
};
export const productReducer = (state = inititalState, action) => {
	console.log('productReducer action : ', action);
	switch (action.type) {
		case SET_PRODUCTS:
			return {
				...state,
				products: action.payload
			};

		case ADD_PRODUCT:
			return {
				...state,
				products: [...state.products, action.payload]
			};

		case UPDATE_PRODUCT:
			return {
				...state,
				products: state.map(item =>
					item.id === action.payload.id ? action.payload : item
				)
			};

		case REMOVE_PRODUCT:
			return {
				...state,
				products: state.filter(item => item.id !== action.payload.id)
			};

		default:
			return state;
	}
};
