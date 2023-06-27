import axios from "axios";

function setupAxios({ apiKey }) {
  
  axios.defaults.baseURL = import.meta.env.VITE_QDRANT_URL;

  if (apiKey) {
    axios.defaults.headers.common["api-key"] = apiKey;
  }
}

export default setupAxios;
