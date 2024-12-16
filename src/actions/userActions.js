
export const ADD_USER = "ADD_USER";
export const SET_USERS = "SET_USERS";
export const UPDATE_USER = "UPDATE_USER";
export const REMOVE_USER = "REMOVE_USER";


export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});

/*************  ✨ Codeium Command ⭐  *************/
/******  39acef70-e293-4da4-bd46-4f6a2534e914  *******/
export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
});
export const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: user,
});
export const removeUser = (id) => ({
    type: REMOVE_USER,
    payload: id,
});
