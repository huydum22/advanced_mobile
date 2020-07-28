import REQUEST from '../HttpClient';
import {
  LESSON_DETAIL,
  LESSON_VIDEO,
  LESSON_SUBTITLE,
  LESSON_SUBTITLE_URL,
  LESSON_UPDATE_STATUS,
  LESSON_UPDATE_CURRENT_TIME,
} from '../../Constants/API';

export const getLessonDetailAPI = async (token, courseID, lessonID) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST(`${LESSON_DETAIL}/${courseID}/${lessonID}`, {
    headers: {Authorization},
  });
};

export const getLessonVideoAPI = async (token, courseID, lessonID) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST(`${LESSON_VIDEO}/${courseID}/${lessonID}`, {
    headers: {Authorization},
  });
};

export const getLessonSubtitleAPI = async (token, courseID, lessonID) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST(`${LESSON_SUBTITLE}/${courseID}/${lessonID}`, {
    headers: {Authorization},
  });
};

export const getLessonSubtitleUrlAPI = async (token, courseID, lessonID) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST(`${LESSON_SUBTITLE_URL}/${courseID}/${lessonID}`, {
    headers: {Authorization},
  });
};

export const getLessonUpdateStatusAPI = async (token, lessonID) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST.post(
    LESSON_UPDATE_STATUS,
    {lessonId: lessonID},
    {
      headers: {Authorization},
    },
  );
};

export const getLessonUpdateCurrentTimeAPI = async (token, lessonID, time) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST.put(
    LESSON_UPDATE_CURRENT_TIME,
    {lessonId: lessonID, currentTime: time},
    {
      headers: {Authorization},
    },
  );
};
