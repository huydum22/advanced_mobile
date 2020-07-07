import axios from 'axios';
import {API} from '../Constants/API';

const BASE_API = axios.create({
  baseURL: API,
  timeout: 100000,
  headers: {'content-type': 'application/json'},
});

export default BASE_API;
