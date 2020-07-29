import {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  PROFILE,
  UPDATE_PASSWORD,
  UPDATE_PROFILE,
} from '../../Constants/API';
import {REQUEST} from '../index';
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

export const updatePasswordAPI = async (token, id, oldPass, newPass) => {
  const Authorization = `Bearer ${token}`;

  return await REQUEST.post(
    UPDATE_PASSWORD,
    {
      id: id,
      oldPass: oldPass,
      newPass: newPass,
    },
    {
      headers: {Authorization},
    },
  );
};

export const updateProfileAPI = async (token, name, avatar, phone) => {
  const Authorization = `Bearer ${token}`;
  return await REQUEST.put(
    UPDATE_PROFILE,
    {
      name: name,
      avatar: avatar,
      phone: phone,
    },
    {
      headers: {Authorization},
    },
  );
};
