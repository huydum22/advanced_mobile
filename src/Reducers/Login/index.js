import {actionTypes} from '../../Actions/Login';
import * as actionTypesProfile from '../../Actions/UpdateProfile';
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
    case actionTypesProfile.actionTypes.UPDATE_PROFILE_REQUEST:
      return {...prevState};
    case actionTypesProfile.actionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...prevState,
        userInfo: action.response.payload,
      };
    case actionTypesProfile.actionTypes.UPDATE_PROFILE_ERROR:
      return {
        ...prevState,
        message: action.error.message,
      };
    default:
      return prevState;
  }
};

export default loginReducer;
