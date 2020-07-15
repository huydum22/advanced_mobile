import {actionTypes} from '../../Actions/UpdateProfile';
export const updateProfileReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PROFILE_REQUEST:
      return {...prevState};
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...prevState,
        userInfo: action.response.userInfo,
      };
    case actionTypes.UPDATE_PROFILE_ERROR:
      return {
        ...prevState,
        message: action.error.message,
      };

    default:
      return prevState;
  }
};

export default updateProfileReducer;
