export const LoginProvider = async (email, password) => {
  if (email === '123') {
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
