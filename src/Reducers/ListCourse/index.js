import {actionTypes} from '../../Actions/ListCourse';
export const listCourseReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.LIST_COURSE_REQUEST:
      return {...prevState};
    case actionTypes.LIST_COURSE_SUCCESS:
      return {
        ...prevState,
        listCourse: action.response.payload,
        message: action.response.message,
        isLoading: false,
      };
    case actionTypes.LIST_COURSE_SEARCH_SUCCESS:
      return {
        ...prevState,
        listCourse: action.response.payload.rows,
        message: action.response.message,
        isLoading: false,
      };
    case actionTypes.LIST_COURSE_ERROR:
      return {
        ...prevState,
        listCourse: [],
        message: action.response.message,
        isLoading: false,
      };

    default:
      return prevState;
  }
};

export default listCourseReducer;
