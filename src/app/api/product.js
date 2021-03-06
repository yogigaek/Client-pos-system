import { get } from "./request-manager"

export const getProduct = async (params) => {
  return await get(`https://market-place-yogi.herokuapp.com/api/product`, { params })
}

export const getCategories = async () => {
  return await get(`https://market-place-yogi.herokuapp.com/api/category`);
}

export const getTagsByCategory = async (category) => {
  return await get(`https://market-place-yogi.herokuapp.com/api/tag/${category}`);
}