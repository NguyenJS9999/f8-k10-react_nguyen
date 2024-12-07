import { createContext, useEffect, useReducer } from "react";
import { userReducer, initialSttate } from "../reducers/userReducer.js";
import { getAll } from "../services/crudServices";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, initialSttate);
	useEffect(() => {
		(async () => {
			const data = await getAll("/users");
			console.log("users data: ", data);
			dispatch({ type: "SET_USERS", payload: data });
		})();
	}, []);
	return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export default UserProvider;
