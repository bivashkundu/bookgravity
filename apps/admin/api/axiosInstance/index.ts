import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstanse = axios.create({
  baseURL: 'http://localhost:5000/api',
});

axiosInstanse.interceptors.request.use(config => {
  const tokenName = process.env.NEXT_APP_TOKEN_NAME || 'bookgravity_admin_token';
  let token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (!token) {
    token = Cookies.get(tokenName) || null;
  }

  if (token && !!config.headers) {
    config.headers['x-access-token'] = token;
  }

  return config;
});

export default axiosInstanse;
