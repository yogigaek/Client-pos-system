import { post } from './request-manager'
// import { config } from "../../config";

export const registerUser = async (data) => {
  return await post(`https://yogi-pos-system.netlify.app/auth/register`, data);
}

export const loginUser = async (data) => {
  return await post(`https://yogi-pos-system.netlify.app/auth/login`, data);
}

export const logoutUser = async () => {
  return await post(`https://yogi-pos-system.netlify.app/auth/logout`, null)
  .then(res => {
    localStorage.removeItem('auth');
    return res
  });
}