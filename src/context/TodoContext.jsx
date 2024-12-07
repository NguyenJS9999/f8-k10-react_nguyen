import { createContext, useEffect, useReducer } from "react";
import { todoReducer, initialSttate } from "../reducers/todoReducer.js";
// import { getAll } from "../services/crudServices";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	const [ todoState, dispatchTodo] = useReducer(todoReducer, initialSttate);
	// console.log('Gọi File context todoState: ', todoState);
	// console.log('Gọi File context dispatchTodo: ', dispatchTodo);

	return <TodoContext.Provider value={{ todoState, dispatchTodo }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
