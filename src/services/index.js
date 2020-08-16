import axios from 'axios';
import {API_URL} from '../Constants/API';

const METHOD = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};
const REQUEST = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: {'content-type': 'application/json'},
});

class BaseAPI {
  BaseMethod = async (method, pathName, body, authorizationToken) => {
    try {
      const headers = authorizationToken
        ? {
            Authorization: `Bearer ${authorizationToken}`,
          }
        : undefined;
      const response = await axios({
        method,
        url: `${API_URL}/${pathName}`,
        data: body,
        headers,
        timeout: 100000,
      });
      if (response.status === 200) {
        return {isSuccess: true, data: response.data};
      }
    } catch ({response}) {
      return {isSuccess: false, data: response.data};
    }
  };

  get = (pathName, token = undefined, body = undefined) =>
    this.BaseMethod(METHOD.GET, pathName, body, token);

  post = (pathName, body = undefined, token = undefined) =>
    this.BaseMethod(METHOD.POST, pathName, body, token);

  put = (pathName, body = undefined, token = undefined) =>
    this.BaseMethod(METHOD.PUT, pathName, body, token);

  delete = (pathName, body = undefined, token = undefined) =>
    this.BaseMethod(METHOD.DELETE, pathName, body, token);

  patch = (pathName, body = undefined, token = undefined) =>
    this.BaseMethod(METHOD.PATCH, pathName, body, token);
}
const DownloadLessonVideo = async (urlVideo, config) =>
  await axios.get(urlVideo, config);
const API = new BaseAPI();
export {REQUEST, API, DownloadLessonVideo};
