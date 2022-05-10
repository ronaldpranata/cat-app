import axios from 'axios';

const origin = process.env.VUE_APP_APIOrigin;
const headers = {
  'Content-Type': 'application/json',
  'x-api-key': process.env.VUE_APP_APIKey,
};

export default {
  async getBreeds(params) {
    const config = {
      headers,
      params,
    };
    return axios.get(`${origin}/breeds`, config);
  },
  async getCatImages(params) {
    const config = {
      headers,
      params,
    };
    return axios.get(`${origin}/images/search`, config);
  },
};
