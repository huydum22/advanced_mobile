import {API} from '../../services';
import {TOP_FAVORITE_COURSE} from '../../Constants/API';

export const actionTypes = {
  FAVORITE_REQUEST: 'FAVORITE_REQUEST',
  FAVORITE_ERROR: 'FAVORITE_ERROR',
  FAVORITE_SUCCESS: 'FAVORITE_SUCCESS',
};
const favoriteRequest = () => ({
  type: actionTypes.FAVORITE_REQUEST,
});

const favoriteError = (error) => ({
  type: actionTypes.FAVORITE_ERROR,
  error,
});

const favoriteSuccess = (response) => ({
  type: actionTypes.FAVORITE_SUCCESS,
  response,
});

export const getFavoriteAction = (dispatch) => async (token) => {
  dispatch(favoriteRequest());
  try {
    let response = await API.get(TOP_FAVORITE_COURSE, token);
    if (response.isSuccess) {
      dispatch(favoriteSuccess(response.data));
    } else {
      dispatch(favoriteError(response.data.message));
    }
  } catch (err) {
    dispatch(favoriteError(err));
  }
};
