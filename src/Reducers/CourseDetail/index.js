import {actionTypes} from '../../Actions/CourseDetail';
export const courseDetailReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.COURSE_DETAIL_REQUEST:
      return {...prevState};
    case actionTypes.COURSE_DETAIL_SUCCESS:
      return {
        ...prevState,
        courseDetail: action.response.payload,
        message: action.response.message,
        isLoading: false,
      };
    case actionTypes.COURSE_DETAIL_ERROR:
      return {
        ...prevState,
        courseDetail: null,
        message: action.response.message,
        isLoading: false,
      };

    default:
      return prevState;
  }
};

export default courseDetailReducer;
