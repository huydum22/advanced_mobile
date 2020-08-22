import {API} from '../../services';
import {
  TOP_NEW,
  TOP_RATE,
  TOP_SELL,
  TOP_USER_FAVORITE,
  RECOMMEND_COURSE,
  SEARCH,
} from '../../Constants/API';
const body = {
  limit: 12,
  offset: 0,
};
export const actionTypes = {
  LIST_COURSE_REQUEST: 'LIST_COURSE_REQUEST',
  LIST_COURSE_ERROR: 'LIST_COURSE_ERROR',
  LIST_COURSE_SUCCESS: 'LIST_COURSE_SUCCESS',

  LIST_COURSE_SEARCH_SUCCESS: 'LIST_COURSE_SEARCH_SUCCESS',
};
const listCourseRequest = () => ({
  type: actionTypes.LIST_COURSE_REQUEST,
});

const listCourseError = (error) => ({
  type: actionTypes.LIST_COURSE_ERROR,
  error,
});

const listCourseSuccess = (response) => ({
  type: actionTypes.LIST_COURSE_SUCCESS,
  response,
});

const listCourseSearchSuccess = (response) => ({
  type: actionTypes.LIST_COURSE_SEARCH_SUCCESS,
  response,
});

export const getTopNewAction = (dispatch) => async () => {
  dispatch(listCourseRequest());
  try {
    let response = await API.post(TOP_NEW, body);
    if (response.isSuccess) {
      dispatch(listCourseSuccess(response.data));
    } else {
      dispatch(listCourseError(response.data.message));
    }
  } catch (err) {
    dispatch(listCourseError(err));
  }
};

export const getTopRateAction = (dispatch) => async () => {
  dispatch(listCourseRequest());
  try {
    let response = await API.post(TOP_RATE, body);
    if (response.isSuccess) {
      dispatch(listCourseSuccess(response.data));
    } else {
      dispatch(listCourseError(response.data.message));
    }
  } catch (err) {
    dispatch(listCourseError(err));
  }
};

export const getTopSellAction = (dispatch) => async () => {
  dispatch(listCourseRequest());
  try {
    let response = await API.post(TOP_SELL, body);
    if (response.isSuccess) {
      dispatch(listCourseSuccess(response.data));
    } else {
      dispatch(listCourseError(response.data.message));
    }
  } catch (err) {
    dispatch(listCourseError(err));
  }
};

export const getYourFavoriteAction = (dispatch) => async (userID) => {
  dispatch(listCourseRequest());
  try {
    let response = await API.post(TOP_USER_FAVORITE, {
      userId: userID,
    });
    if (response.isSuccess) {
      dispatch(listCourseSuccess(response.data));
    } else {
      dispatch(listCourseError(response.data.message));
    }
  } catch (err) {
    dispatch(listCourseError(err));
  }
};

export const getRecommendCourseAction = (dispatch) => async (userID) => {
  dispatch(listCourseRequest());
  try {
    let response = await API.get(
      `${RECOMMEND_COURSE}/${userID}/${body.limit}/${body.offset}`,
    );
    if (response.isSuccess) {
      dispatch(listCourseSuccess(response.data));
    } else {
      dispatch(listCourseError(response.data.message));
    }
  } catch (err) {
    dispatch(listCourseError(err));
  }
};
export const getSearchCourseAction = (dispatch) => async (price) => {
  dispatch(listCourseRequest());
  try {
    let response = await API.post(SEARCH, {
      keyword: '',
      opt: {price: [price]},
      limit: body.limit,
      offset: body.offset,
    });
    if (response.isSuccess) {
      dispatch(listCourseSearchSuccess(response.data));
    } else {
      dispatch(listCourseError(response.data.message));
    }
  } catch (err) {
    dispatch(listCourseError(err));
  }
};

export const getDefaultAction = (dispatch) => async (idCourse) => {
  dispatch(listCourseRequest());
  try {
    let response = await await API.post(SEARCH, {
      keyword: '',
      opt: {category: [idCourse]},
      limit: body.limit,
      offset: body.offset,
    });
    if (response.isSuccess) {
      dispatch(listCourseSearchSuccess(response.data));
    } else {
      dispatch(listCourseError(response.data.message));
    }
  } catch (err) {
    dispatch(listCourseError(err));
  }
};
