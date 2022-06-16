// import { config } from '../../config'
import { get, post } from './request-manager'

// export const getAddress = async () => {
//   return await get(`${config.api_host}/api/shipping-address`)
// }

export const getAddress = async () => {
  return await get(`https://yogi-pos-system.netlify.app/api/shipping-address`)
}

export const getLocation = async (location, code) => {
  return await get(`https://yogi-pos-system.netlify.app/api/${location}?kode_induk=${code}`);
}

export const createAddress = async data => {
  return await post(`https://yogi-pos-system.netlify.app/api/shipping-address`, data)
}