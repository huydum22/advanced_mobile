import {API} from '../../services';
import {INSTRUCTOR_DETAIL} from '../../Constants/API';

export const actionTypes = {
  AUTHOR_DETAIL_REQUEST: 'AUTHOR_DETAIL_REQUEST',
  AUTHOR_DETAIL_ERROR: 'AUTHOR_DETAIL_ERROR',
  AUTHOR_DETAIL_SUCCESS: 'AUTHOR_DETAIL_SUCCESS',
};
const authorDetailRequest = () => ({
  type: actionTypes.AUTHOR_DETAIL_REQUEST,
});

const authorDetailError = (error) => ({
  type: actionTypes.AUTHOR_DETAIL_ERROR,
  error,
});

const authorDetailSuccess = (response) => ({
  type: actionTypes.AUTHOR_DETAIL_SUCCESS,
  response,
});

export const getAuthorDetailAction = (dispatch) => async (authorID) => {
  dispatch(authorDetailRequest());
  try {
    let response = await API.get(`${INSTRUCTOR_DETAIL}${authorID}`);
    if (response.isSuccess) {
      dispatch(authorDetailSuccess(response.data));
    } else {
      dispatch(authorDetailError(response.data.message));
    }
  } catch (err) {
    dispatch(authorDetailError(err));
  }
};
