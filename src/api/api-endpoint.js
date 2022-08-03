import CONFIG from "./config";

const API_ENDPOINT = {
  NEW_RECIPE: `${CONFIG.BASE_API_URL}/recipes`,
  RECIPE_DETAIL: (id) => `${CONFIG.BASE_API_URL}/recipe/${id}`,
  RECIPE_SEARCH: (query) => `${CONFIG.BASE_API_URL}/search/?q=${query}`,
  ARTICLE_CATEGORY: `${CONFIG.BASE_API_URL}/category/article`,
  ARTICLE_DETAIL: (tag, key) => `${CONFIG.BASE_API_URL}/article/${tag}/${key}`,
};

export default API_ENDPOINT;