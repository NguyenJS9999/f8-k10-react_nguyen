import { createContext, useEffect, useReducer } from "react";
import { todoReducer, initialSttate } from "../reducers/todoReducer.js";
// import { getAll } from "../services/crudServices";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(todoReducer, initialSttate);

	return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
