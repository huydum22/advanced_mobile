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

    case actionTypes.USER_REQUEST:
      return {...prevState};
    case actionTypes.USER_SUCCESS:
      return {
        ...prevState,
        userInfo: action.response.payload,
      };
    case actionTypes.USER_ERROR:
      return {
        ...prevState,
        message: action.error.message,
      };
    case actionTypes.USER_TOKEN:
      return {
        ...prevState,
        token: action.response,
      };
    default:
      return prevState;
  }
};

export default loginReducer;
