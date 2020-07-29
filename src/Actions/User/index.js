import {API} from '../../services';
import {PROFILE} from '../../Constants/API';
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
    const response = await API.get(PROFILE, token);
    if (response.isSuccess) {
      dispatch(userSuccess(response.data));
    }
  } catch ({response}) {
    dispatch(userError(response.data));
  }
};
export const tokenAction = (dispatch) => async (token) => {
  dispatch(userToken(token));
};
