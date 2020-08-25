import {API} from '../../services';
import {
  COURSE_DETAIL_WITH_LESSON,
  LESSON_UPDATE_CURRENT_TIME,
  LAST_WATCHED_LESSON,
  LESSON_DETAIL,
  LESSON_VIDEO,
  FORUM_QUESTION,
  NOTE_ALL_LESSON,
} from '../../Constants/API';
import axios from 'axios';
export const actionTypes = {
  LESSON_COURSE_REQUEST: 'LESSON_COURSE_REQUEST',
  LESSON_COURSE_ERROR: 'LESSON_COURSE_ERROR',
  LESSON_COURSE_SUCCESS: 'LESSON_COURSE_SUCCESS',

  LESSON_REQUEST: 'LESSON_REQUEST',
  LESSON_ERROR: 'LESSON_ERROR',
  LESSON_SUCCESS: 'LESSON_SUCCESS',

  PRESS_LESSON_REQUEST: 'PRESS_LESSON_REQUEST',
  PRESS_LESSON_ERROR: 'PRESS_LESSON_ERROR',
  PRESS_LESSON_SUCCESS: 'PRESS_LESSON_SUCCESS',
};
const courseDetailWithLessonRequest = () => ({
  type: actionTypes.LESSON_COURSE_REQUEST,
});

const courseDetailWithLessonError = (error) => ({
  type: actionTypes.LESSON_COURSE_ERROR,
  error,
});

const courseDetailWithLessonSuccess = (response) => ({
  type: actionTypes.LESSON_COURSE_SUCCESS,
  response,
});

const lessonDetailRequest = () => ({
  type: actionTypes.LESSON_REQUEST,
});

const lessonDetailError = (error) => ({
  type: actionTypes.LESSON_ERROR,
  error,
});

const lessonDetailSuccess = (response) => ({
  type: actionTypes.LESSON_SUCCESS,
  response,
});

const pressLessonRequest = () => ({
  type: actionTypes.PRESS_LESSON_REQUEST,
});

const pressLessonError = (error) => ({
  type: actionTypes.PRESS_LESSON_ERROR,
  error,
});

const pressLessonSuccess = (response) => ({
  type: actionTypes.PRESS_LESSON_SUCCESS,
  response,
});
export const getCourseDetailWithLessonAction = (dispatch) => async (
  token,
  courseId,
) => {
  dispatch(courseDetailWithLessonRequest());

  const requestCourseDetailWithLesson = API.get(
    `${COURSE_DETAIL_WITH_LESSON}/${courseId}`,
    token,
  );
  const requestLastWatchLesson = API.get(
    `${LAST_WATCHED_LESSON}/${courseId}`,
    token,
  );
  const requestQuestionCourse = API.get(
    `${FORUM_QUESTION}/?page=1&pageSize=6&courseId=${courseId}`,
    token,
  );
  const requestNoteCourse = API.get(`${NOTE_ALL_LESSON}/${courseId}`, token);
  axios
    .all([
      requestCourseDetailWithLesson,
      requestLastWatchLesson,
      requestQuestionCourse,
      requestNoteCourse,
    ])
    .then(
      axios.spread(async (...responses) => {
        dispatch(courseDetailWithLessonSuccess(responses));
        if (responses[1].data.payload.lessonId) {
          dispatch(lessonDetailRequest());
          try {
            let lessonRequest = await API.get(
              `${LESSON_DETAIL}/${courseId}/${responses[1].data.payload.lessonId}`,
              token,
            );
            if (lessonRequest.isSuccess) {
              dispatch(lessonDetailSuccess(lessonRequest.data));
            } else {
              dispatch(lessonDetailError(lessonRequest.data.message));
            }
          } catch (err) {
            dispatch(lessonDetailError(err));
          }
        }
      }),
    )
    .catch((err) => {
      dispatch(courseDetailWithLessonError(err));
    });
};
export const pressLessonAction = (dispatch) => async (
  token,
  courseId,
  lessonId,
) => {
  dispatch(pressLessonRequest());

  const requestDetailLesson = API.get(
    `${LESSON_DETAIL}/${courseId}/${lessonId}`,
    token,
  );
  const requestVideoLesson = API.get(
    `${LESSON_VIDEO}/${courseId}/${lessonId}`,
    token,
  );

  axios
    .all([requestDetailLesson, requestVideoLesson])
    .then(
      axios.spread((...responses) => {
        dispatch(pressLessonSuccess(responses));
      }),
    )
    .catch((err) => {
      dispatch(pressLessonError(err));
    });
};
export const updateCurrentTime = async (token, lessonId, time) => {
  try {
    try {
      let response = await API.put(
        LESSON_UPDATE_CURRENT_TIME,
        {
          lessonId: lessonId,
          currentTime: time,
        },
        token,
      );
      if (response.isSuccess) {
        console.log(response.data)
      } else {
        console.log(response.data);

      }
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};
