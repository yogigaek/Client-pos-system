import { put } from './request-manager'
// import { config } from '../../config'

export const saveCart = async (token, cart) => {
  return await put(`https://pos-system-yogi.herokuapp.com/api/cart`, {items: cart})
}