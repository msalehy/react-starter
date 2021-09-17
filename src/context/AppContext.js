import React, { createContext, useReducer } from "react";

export const StateContext = createContext();
export const DispatchContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case "updateUserData":
      return {
        ...state,
        userData: action.payload,
      };
    case "authenticated":
      return {
        ...state,
        authenticated: action.payload,
      };

    default:
      return {
        state,
      };
  }
}

const initialState = {
  authenticated: false,
  userData: null,
  testData: "This is from context store",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
export default AppProvider;
