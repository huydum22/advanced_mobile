import {actionTypes} from '../../Actions/MyCourse';
export const myCourseReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.MY_COURSE_REQUEST:
      return {...prevState};
    case actionTypes.MY_COURSE_SUCCESS:
      return {
        ...prevState,
        listMyCourse: action.response.payload,
        message: action.response.message,
        isLoading: false,
      };
    case actionTypes.MY_COURSE_ERROR:
      return {
        ...prevState,
        listMyCourse: null,
        message: action.response.message,
        isLoading: false,
      };

    default:
      return prevState;
  }
};

export default myCourseReducer;
