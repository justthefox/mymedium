import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  isLoading: false,
  isLoggedIn: null,
  currentUser: null,
};

export const ACTIONS = {
  LOADING: 'LOADING',
  SET_AUTHORIZED: 'SET_AUTHORIZED',
  SET_UNAUTHORIZED: 'SET_UNAUTHORIZED',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.SET_AUTHORIZED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: payload,
      };
    case ACTIONS.SET_UNAUTHORIZED:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const UserContext = createContext([{}, () => {}]);

export const UserProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
