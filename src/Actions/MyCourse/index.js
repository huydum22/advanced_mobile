import {API} from '../../services';
import {MY_COURSE} from '../../Constants/API';

export const actionTypes = {
  MY_COURSE_REQUEST: 'MY_COURSE_REQUEST',
  MY_COURSE_ERROR: 'MY_COURSE_ERROR',
  MY_COURSE_SUCCESS: 'MY_COURSE_SUCCESS',
};
const myCourseRequest = () => ({
  type: actionTypes.MY_COURSE_REQUEST,
});

const myCourseError = (error) => ({
  type: actionTypes.CMY_COURSE_ERROR,
  error,
});

const myCourseSuccess = (response) => ({
  type: actionTypes.MY_COURSE_SUCCESS,
  response,
});

export const getMyCourseAction = (dispatch) => async (token) => {
  dispatch(myCourseRequest());
  try {
    let response = await API.get(MY_COURSE, token);
    if (response.isSuccess) {
      dispatch(myCourseSuccess(response.data));
    } else {
      dispatch(myCourseError(response.data.message));
    }
  } catch (err) {
    dispatch(myCourseError(err));
  }
};
