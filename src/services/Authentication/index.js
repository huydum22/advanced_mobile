export const LoginProvider = (email, password) => {
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
