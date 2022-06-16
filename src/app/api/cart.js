import { put } from './request-manager'
// import { config } from '../../config'

export const saveCart = async (token, cart) => {
  return await put(`https://yogi-pos-system.netlify.app/api/cart`, {items: cart})
}