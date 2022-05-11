import axios from 'axios';

const origin = process.env.VUE_APP_APIOrigin;
const headers = {
  'Content-Type': 'application/json',
  'x-api-key': process.env.VUE_APP_APIKey,
};
const googleMapUrl = process.env.VUE_APP_GMAP_URL;

export default {
  async getBreeds(params) {
    const config = {
      headers,
      params,
    };
    return axios.get(`${origin}/breeds`, config);
  },
  async getMapLocation(params) {
    const config = {
      params,
    };
    return axios.get(`${googleMapUrl}`, config);
  },
};
