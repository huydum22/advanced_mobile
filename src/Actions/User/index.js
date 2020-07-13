import {ProfileAPI} from '../../services/Authentication';
import {actionTypes} from '../Login';
const userRequest = () => ({
  type: actionTypes.USER_REQUEST,
});

const userError = (error) => ({
  type: actionTypes.USER_ERROR,
  error,
});

const userSuccess = (response) => ({
  type: actionTypes.USER_SUCCESS,
  response,
});

const userToken = (response) => ({
  type: actionTypes.USER_TOKEN,
  response,
});
export const userAction = (dispatch) => async (token) => {
  dispatch(userRequest());
  try {
    const response = await ProfileAPI(token);
    if (response.status === 200) {
      dispatch(userSuccess(response.data));
    }
  } catch ({response}) {
    dispatch(userError(response.data));
  }
};
export const tokenAction = (dispatch) => async (token) => {
  dispatch(userToken(token));
};
