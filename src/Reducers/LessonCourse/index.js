import {actionTypes} from '../../Actions/LessonCourse';
export const lessonCourseReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.LESSON_COURSE_REQUEST:
      return {...prevState};
    case actionTypes.LESSON_COURSE_SUCCESS:
      return {
        ...prevState,
        course: action.response[0].data.payload,
        itemVideo: action.response[1].data.payload,
        question: action.response[2].data.payload,
        allNote: action.response[3].data.payload,
        message: action.response.message,
        isLoading: false,
      };
    case actionTypes.LESSON_COURSE_ERROR:
      return {
        ...prevState,
        course: {},
        itemVideo: {},
        question: {},
        allNote: [],
        message: action.response.message,
        isLoading: false,
      };
    case actionTypes.LESSON_REQUEST:
      return {...prevState};
    case actionTypes.LESSON_SUCCESS:
      return {
        ...prevState,
        itemLesson: action.response.payload,
        isLoading: false,
      };
    case actionTypes.LESSON_ERROR:
      return {
        ...prevState,
        itemLesson: {},
        isLoading: false,
      };
    case actionTypes.PRESS_LESSON_REQUEST:
      return {...prevState, itemVideo: {}};
    case actionTypes.PRESS_LESSON_SUCCESS:
      return {
        ...prevState,
        itemLesson: action.response[0].data.payload,
        itemVideo: action.response[1].data.payload,
        isLoading: false,
      };
    case actionTypes.PRESS_LESSON_ERROR:
      return {
        ...prevState,
        itemLesson: {},
        itemVideo: {},
        isLoading: false,
      };
    default:
      return prevState;
  }
};

export default lessonCourseReducer;
