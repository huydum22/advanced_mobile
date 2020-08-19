import {API} from '../../services';
import {ALL_CATEGORY} from '../../Constants/API';

export const actionTypes = {
  CATEGORY_REQUEST: 'CATEGORY_REQUEST',
  CATEGORY_ERROR: 'CATEGORY_ERROR',
  CATEGORY_SUCCESS: 'CATEGORY_SUCCESS',
};
const categoryRequest = () => ({
  type: actionTypes.CATEGORY_REQUEST,
});

const categoryError = (error) => ({
  type: actionTypes.CATEGORY_ERROR,
  error,
});

const categorySuccess = (response) => ({
  type: actionTypes.CATEGORY_SUCCESS,
  response,
});

export const getCategoryAction = (dispatch) => async () => {
  dispatch(categoryRequest());
  try {
    let response = await API.get(ALL_CATEGORY);
    if (response.isSuccess) {
      dispatch(categorySuccess(response.data));
    } else {
      dispatch(categoryError(response.data.message));
    }
  } catch (err) {
    dispatch(categoryError(err));
  }
};
