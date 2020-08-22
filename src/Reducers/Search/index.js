import {actionTypes} from '../../Actions/Search';
export const recentSearchReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.RECENT_SEARCH_REQUEST:
      return {...prevState};
    case actionTypes.RECENT_SEARCH_SUCCESS:
      return {
        ...prevState,
        listItemSearch: action.response.payload.data,
        message: action.response.message,
        isLoading: false,
      };
    case actionTypes.RECENT_SEARCH_ERROR:
      return {
        ...prevState,
        listItemSearch: [],
        message: action.response.message,
        isLoading: false,
      };

    default:
      return prevState;
  }
};
export const searchResultReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_RESULT_REQUEST:
      return {...prevState, isLoading: true};
    case actionTypes.SEARCH_RESULT_SUCCESS:
      return {
        ...prevState,
        listItemSearch: action.response.payload.data,
        listCourse: action.response.payload.courses.data,
        totalCourse: action.response.payload.courses.total,
        listAuthor: action.response.payload.instructors.data,
        totalAuthor: action.response.payload.instructors.total,
        message: action.response.message,
        isLoading: false,
      };
    case actionTypes.SEARCH_RESULT_ERROR:
      return {
        ...prevState,
        listCourse: [],
        listAuthor: [],
        message: action.response.message,
        isLoading: false,
      };

    default:
      return prevState;
  }
};
