import { post } from './request-manager'
// import { config } from "../../config";

export const registerUser = async (data) => {
  return await post(`https://pos-system-yogi.herokuapp.com/auth/register`, data);
}

export const loginUser = async (data) => {
  return await post(`https://pos-system-yogi.herokuapp.com/auth/login`, data);
}

export const logoutUser = async () => {
  return await post(`https://pos-system-yogi.herokuapp.com/auth/logout`, null)
  .then(res => {
    localStorage.removeItem('auth');
    return res
  });
}