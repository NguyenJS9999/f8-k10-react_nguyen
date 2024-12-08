import React, { createContext, useReducer } from "react";
import { appReducer, initialState } from "../reducers/appReducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ appState , dispatchApp ] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ appState, dispatchApp }}>
      {children}
    </AppContext.Provider>
  );
};
