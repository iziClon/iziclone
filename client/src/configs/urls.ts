const baseURL = 'http://localhost:5200';

export const urls = {
  common: '/common',
  product: '/product',
  auth: {
    signUp: '/auth/registration',
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
  },
  users: '/users',
};

export default baseURL;
