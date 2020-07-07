import React, {useState, useReducer} from 'react';
import {loginReducer} from '../../Reducers/Login';
import {loginAction} from '../../Actions/Login';
const AuthenticationContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  userInfo: null,
  token: null,
};
const AuthenticationProvider = (props) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  return (
    <AuthenticationContext.Provider
      value={{
        state,
        loginProvider: loginAction(dispatch),
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationProvider, AuthenticationContext};
