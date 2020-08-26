import {API} from '../../services';
import {
  SEARCH_HISTORY,
  DELETE_SEARCH_HISTORY,
  SEARCHV2,
} from '../../Constants/API';
export const actionTypes = {
  RECENT_SEARCH_REQUEST: 'RECENT_SEARCH_REQUEST',
  RECENT_SEARCH_ERROR: 'RECENT_SEARCH_ERROR',
  RECENT_SEARCH_SUCCESS: 'RECENT_SEARCH_SUCCESS',

  SEARCH_RESULT_REQUEST: 'SEARCH_RESULT_REQUEST',
  SEARCH_RESULT_ERROR: 'SEARCH_RESULT_ERROR',
  SEARCH_RESULT_SUCCESS: 'SEARCH_RESULT_SUCCESS',
};
const recentSearchRequest = () => ({
  type: actionTypes.RECENT_SEARCH_REQUEST,
});

const recentSearchError = (error) => ({
  type: actionTypes.RECENT_SEARCH_ERROR,
  error,
});

const recentSearchSuccess = (response) => ({
  type: actionTypes.RECENT_SEARCH_SUCCESS,
  response,
});

const searchResultRequest = () => ({
  type: actionTypes.SEARCH_RESULT_REQUEST,
});

const searchResultError = (error) => ({
  type: actionTypes.SEARCH_RESULT_ERROR,
  error,
});

const searchResultSuccess = (response) => ({
  type: actionTypes.SEARCH_RESULT_SUCCESS,
  response,
});
export const getSearchHistory = (dispatch) => async (token) => {
  dispatch(recentSearchRequest());
  try {
    let response = await API.get(SEARCH_HISTORY, token);
    if (response.isSuccess) {
      dispatch(recentSearchSuccess(response.data));
    } else {
      dispatch(recentSearchError(response.data.message));
    }
  } catch (err) {
    dispatch(recentSearchError(err));
  }
};

export const deleteItemSearch = (dispatch) => async (itemID, token) => {
  try {
    let response = await API.delete(
      `${DELETE_SEARCH_HISTORY}/${itemID}`,
      undefined,
      token,
    );
    if (response.isSuccess) {
      getSearchHistory(dispatch)(token);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getSearchResult = (dispatch) => async (token, keyword, offset) => {
  dispatch(searchResultRequest());
  try {
    let response = await API.post(SEARCHV2, {
      token: token,
      keyword: keyword,
      opt: {category: null},
      limit: 12,
      offset: offset,
    });
    if (response.isSuccess) {
      dispatch(searchResultSuccess(response.data));
    } else {
      dispatch(searchResultError(response.data.message));
    }
  } catch (err) {
    dispatch(searchResultError(err));
  }
};
