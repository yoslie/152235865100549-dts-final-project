import CONFIG from "./config";

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_API_URL}/list`,
  RESTAURANT_DETAIL: (id) => `${CONFIG.BASE_API_URL}/detail/${id}`,
  RESTAURANT_IMG: (id) => `${CONFIG.BASE_API_URL}/images/medium/${id}`,
  RESTAURANT_SEARCH: (query) => `${CONFIG.BASE_API_URL}/search?q=${query}`,
};

export default API_ENDPOINT;