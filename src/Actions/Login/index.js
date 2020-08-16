import {API} from '../../services';
import {LOGIN, LOGIN_GOOGLE} from '../../Constants/API';
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
    } else {
      dispatch(loginError(response.data));
    }
  } catch ({response}) {
    dispatch(loginError(response.data));
  }
};
export const loginGGAction = (dispatch) => async (email, id) => {
  dispatch(loginRequest());
  try {
    const data = {
      user: {
        email: email,
        id: id,
      },
    };
    const response = await API.post(LOGIN_GOOGLE, data);
    if (response.isSuccess) {
      dispatch(loginSuccess(response.data));
    } else {
      dispatch(loginError(response.data));
    }
  } catch (err) {
    dispatch(loginError(err));
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
