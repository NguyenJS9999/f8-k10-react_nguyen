import { createContext, useEffect, useReducer } from "react";
import { userReducer, initialSttate } from "../reducers/userReducer.js";
// import { getAll } from "../services/crudServices";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [ userState, dispatchUser] = useReducer(userReducer, initialSttate);

	console.log('Gọi File context UserProvider userState: ', userState);
	// console.log('Gọi File context UserProvider dispatchUser: ', dispatchUser);

	return <UserContext.Provider value={{ userState, dispatchUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
