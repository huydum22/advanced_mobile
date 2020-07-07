import {LoginAPI} from '../../services/Authentication';
import p from 'pretty-format';
export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};
const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
});

const loginError = (error) => ({
  type: actionTypes.LOGIN_ERROR,
  error,
});

const loginSuccess = (response) => ({
  type: actionTypes.LOGIN_SUCCESS,
  response,
});
export const loginAction = (dispatch) => async (email, password) => {
  dispatch(loginRequest());
  try {
    const response = await LoginAPI(email, password);
    if (response.status === 200) {
      dispatch(loginSuccess(response.data));
    } else {
      dispatch(loginError(response.data.message));
    }
  } catch (error) {
    dispatch(loginError(error.message));
  }
};
