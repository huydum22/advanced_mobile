import {API} from '../../services';
import {COURSE_DETAIL} from '../../Constants/API';

export const actionTypes = {
  COURSE_DETAIL_REQUEST: 'COURSE_DETAIL_REQUEST',
  COURSE_DETAIL_ERROR: 'COURSE_DETAIL_ERROR',
  COURSE_DETAIL_SUCCESS: 'COURSE_DETAIL_SUCCESS',
};
const courseDetailRequest = () => ({
  type: actionTypes.COURSE_DETAIL_REQUEST,
});

const courseDetailError = (error) => ({
  type: actionTypes.COURSE_DETAIL_ERROR,
  error,
});

const courseDetailSuccess = (response) => ({
  type: actionTypes.COURSE_DETAIL_SUCCESS,
  response,
});

export const getCourseDetailAction = (dispatch) => async (courseId) => {
  dispatch(courseDetailRequest());
  try {
    let response = await API.get(`${COURSE_DETAIL}/${courseId}/null`);
    if (response.isSuccess) {
      dispatch(courseDetailSuccess(response.data));
    } else {
      dispatch(courseDetailError(response.data.message));
    }
  } catch (err) {
    dispatch(courseDetailError(err));
  }
};
