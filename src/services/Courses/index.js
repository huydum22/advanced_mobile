import REQUEST from '../HttpClient';
import {
  TOP_NEW,
  TOP_RATE,
  TOP_SELL,
  TOP_USER_FAVORITE,
  TOP_FAVORITE_COURSE,
  RECOMMEND_COURSE,
  COURSE_INFO,
  MY_COURSE,
  COURSE_DETAIL,
  PROCESS_COURSE,
  COURSE_DETAIL_WITH_LESSON,
  GET_FREE_COURSE,
  CHECK_OWN_COURSE,
} from '../../Constants/API';

export const topRateCourseAPI = async () => {
  return await REQUEST.post(TOP_RATE, {
    limit: 10,
    page: 1,
  });
};
export const topSellerCourseAPI = async () => {
  return await REQUEST.post(TOP_SELL, {
    limit: 10,
    page: 1,
  });
};

export const topNewCourseAPI = async () => {
  return await REQUEST.post(TOP_NEW, {
    limit: 10,
    offset: 0,
  });
};

export const topCourseUserFavoriteAPI = async (id) => {
  return await REQUEST.post(TOP_USER_FAVORITE, {
    userId: id,
  });
};
export const topFavoriteCourseAPI = async (token) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST(TOP_FAVORITE_COURSE, {
    headers: {Authorization},
  });
};

export const recommendCourseAPI = async (id) => {
  return await REQUEST(`${RECOMMEND_COURSE}${id}/10/1`);
};

export const courseInfoAPI = async (token, id) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST(`${COURSE_INFO}?id=${id}`, {
    headers: {Authorization},
  });
};

export const getMyCoursesAPI = async (token) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST(`${MY_COURSE}`, {
    headers: {Authorization},
  });
};

export const getCourseDetailAPI = async (id) => {
  return await REQUEST(`${COURSE_DETAIL}/${id}/null`);
};

export const getCourseDetailWithLessonAPI = async (token, id) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST(`${COURSE_DETAIL_WITH_LESSON}/${id}`, {
    headers: {Authorization},
  });
};

export const getProcessCourseAPI = async (token, id) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST(`${PROCESS_COURSE}/${id}`, {
    headers: {Authorization},
  });
};

export const registerCourseAPI = async (token, courseID) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST.post(
    GET_FREE_COURSE,
    {courseId: courseID},
    {
      headers: {Authorization},
    },
  );
};

export const getCheckOwnCourseAPI = async (token, courseID) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST(`${CHECK_OWN_COURSE}/${courseID}`, {
    headers: {Authorization},
  });
};
