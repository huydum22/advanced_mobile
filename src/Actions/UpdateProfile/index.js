import {API} from '../../services';
import {UPDATE_PROFILE} from '../../Constants/API';

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
    const data = {
      name: name,
      avatar: avatar,
      phone: phone,
    };
    const response = await API.put(UPDATE_PROFILE, data, token);
    if (response.isSuccess) {
      dispatch(updateProfileSuccess(response.data));
    } else {
      dispatch(updateProfileError(response.data));
    }
  } catch ({response}) {
    dispatch(updateProfileError(response.data));
  }
};
