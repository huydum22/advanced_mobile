import React, {useState, useReducer} from 'react';
import {loginReducer} from '../../Reducers/Login';
import {loginAction, logoutAction} from '../../Actions/Login';
import {updateProfileAction} from '../../Actions/UpdateProfile';
const AuthenticationContext = React.createContext();

const initialState = {
  userInfo: null,
  token: null,
  message: '',
};
const AuthenticationProvider = (props) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  return (
    <AuthenticationContext.Provider
      value={{
        state,
        loginProvider: loginAction(dispatch),
        logoutProvider: logoutAction(dispatch),
        updateProfileProvider: updateProfileAction(dispatch),
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationProvider, AuthenticationContext};
