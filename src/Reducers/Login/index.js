import {actionTypes} from '../../Actions/Login';
import p from 'pretty-format';
export const loginReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {...prevState};
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...prevState,
        isAuthenticated: true,
        token: action.response.token,
        userInfo: action.response.userInfo,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...prevState,
        isAuthenticated: false,
      };
    default:
      return prevState;
  }
};

export default loginReducer;
