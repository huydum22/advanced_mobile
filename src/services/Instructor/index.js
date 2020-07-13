import REQUEST from '../HttpClient';
import {INSTRUCTOR} from '../../Constants/API';

export const listInstructorAPI = async () => {
  return await REQUEST(INSTRUCTOR);
};
