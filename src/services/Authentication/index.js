import {LOGIN, REGISTER, FORGOT_PASSWORD} from '../../Constants/API';
import REQUEST from '../HttpClient';
export const LoginProvider = async (email, password) => {
  if (email === '1612253@student.hcmus.edu.vn') {
    if (password === '123') {
      return {
        status: 200,
        isLogin: true,
        user: {
          email: email,
          name: 'Hồ Quốc Huy',
        },
      };
    } else {
      return {
        status: 404,
        isLogin: false,
        error:
          'Wrong password. Try again or click Forgot password to reset it.',
      };
    }
  } else {
    return {status: 404, isLogin: false, error: 'Email does not exist'};
  }
};
export const LogoutProvider = () => {
  return {
    status: 200,
    isLogin: false,
  };
};
export const LoginAPI = async (email, password) => {
  return await REQUEST.post(LOGIN, {
    email: email,
    password: password,
  });
};

export const RegisterAPI = async (username, phone, email, password) => {
  return await REQUEST.post(REGISTER, {
    username: username,
    phone: phone,
    email: email,
    password: password,
  });
};

export const ForgotPasswordAPI = async (email) => {
  return await REQUEST.post(FORGOT_PASSWORD, {
    email: email,
  });
};
