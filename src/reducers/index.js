import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { countReducer } from './countReducer';

const rootReducer = combineReducers({
	products: productReducer,
	counts: countReducer
});

export default rootReducer;
