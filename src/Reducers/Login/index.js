import {actionTypes} from '../../Actions/Login';
export const loginReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {...prevState};
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...prevState,
        token: action.response.token,
        userInfo: action.response.userInfo,
        message: '',
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...prevState,
        userInfo: null,
        token: null,
        message: action.error.message,
      };
    case actionTypes.LOGOUT:
      return {
        userInfo: null,
        token: null,
        message: '',
      };
    default:
      return prevState;
  }
};

export default loginReducer;
