import {
  post
} from './request-manager'

export const registerUser = async (data) => {
  return await post(`https://market-place-yogi.herokuapp.com/auth/register`, data);
}

export const loginUser = async (data) => {
  return await post(`https://market-place-yogi.herokuapp.com/auth/login`, data);
}

export const logoutUser = async () => {
  return await post(`https://market-place-yogi.herokuapp.com/auth/logout`, null)
    .then(res => {
      localStorage.removeItem('auth');
      return res
    });
}