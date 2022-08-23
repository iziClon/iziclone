const baseURL = 'http://localhost:5200';

export const urls = {
  commons: '/common',
  products: '/product',
  auth: {
    signUp: '/auth/registration',
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
  },
  users: '/users',
  images: '/image',
};

export default baseURL;
