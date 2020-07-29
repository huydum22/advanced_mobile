import {API} from '../../services';
import {LOGIN} from '../../Constants/API';
import {useAsyncStorage} from '@react-native-community/async-storage';

export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
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

const logoutRequest = () => ({
  type: actionTypes.LOGOUT,
});

export const loginAction = (dispatch) => async (email, password) => {
  dispatch(loginRequest());
  try {
    const data = {
      email: email,
      password: password,
    };
    const response = await API.post(LOGIN, data);
    if (response.isSuccess) {
      dispatch(loginSuccess(response.data));
    }
  } catch ({response}) {
    dispatch(loginError(response.data));
  }
};

export const logoutAction = (dispatch) => async () => {
  const {removeItem} = useAsyncStorage('@userToken');

  try {
    await removeItem();
  } catch (e) {
    // remove error
  }
  dispatch(logoutRequest());
  console.log('Done.');
};
