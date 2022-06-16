import { get } from "./request-manager"
// import { config } from "../../config"

export const getProduct = async (params) => {
  return await get(`https://yogi-pos-system.netlify.app/api/product`, { params })
}

export const getCategories = async () => {
  return await get(`hhttps://yogi-pos-system.netlify.app/api/category`);
}

export const getTagsByCategory = async (category) => {
  return await get(`https://yogi-pos-system.netlify.app/api/tag/${category}`);
}