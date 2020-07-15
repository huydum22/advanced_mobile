import {updateProfileAPI} from '../../services/Authentication';
import {useAsyncStorage} from '@react-native-community/async-storage';

export const actionTypes = {
  UPDATE_PROFILE_REQUEST: 'UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_ERROR: 'UPDATE_PROFILE_ERROR',
  UPDATE_PROFILE_SUCCESS: 'UPDATE_PROFILE_SUCCESS',
};
const updateProfileRequest = () => ({
  type: actionTypes.UPDATE_PROFILE_REQUEST,
});

const updateProfileError = (error) => ({
  type: actionTypes.UPDATE_PROFILE_ERROR,
  error,
});

const updateProfileSuccess = (response) => ({
  type: actionTypes.UPDATE_PROFILE_SUCCESS,
  response,
});

export const updateProfileAction = (dispatch) => async (
  token,
  name,
  phone,
  avatar,
) => {
  dispatch(updateProfileRequest());
  try {
    const response = await updateProfileAPI(token, name, avatar, phone);
    if (response.status === 200) {
      dispatch(updateProfileSuccess(response.data));
    }
  } catch ({response}) {
    dispatch(updateProfileError(response.data));
  }
};
