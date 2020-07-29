import {REQUEST} from '../index';
import {INSTRUCTOR, INSTRUCTOR_DETAIL} from '../../Constants/API';

export const listInstructorAPI = async () => {
  return await REQUEST(INSTRUCTOR);
};

export const instructorDetailAPI = async (id) => {
  return await REQUEST(`${INSTRUCTOR_DETAIL}${id}`);
};
