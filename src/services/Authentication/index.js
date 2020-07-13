import {LOGIN, REGISTER, FORGOT_PASSWORD, PROFILE} from '../../Constants/API';
import REQUEST from '../HttpClient';
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

export const ProfileAPI = async (token) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST(PROFILE, {
    headers: {Authorization},
  });
};
