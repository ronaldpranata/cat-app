import API from '../api/index';
import {
  GET_CAT_BREEDS,
  SET_CAT_DETAIL,
  GET_ORIGIN_LOCATION,
} from './action_types';

const googleKey = process.env.VUE_APP_GMAP_KEY;

export default {
  async [GET_CAT_BREEDS]({ commit }, params) {
    try {
      const response = await API.getBreeds(params);
      commit('SET_CAT_BREEDS', response?.data);
      return response?.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async [GET_ORIGIN_LOCATION]({ commit }, params) {
    try {
      const paramSend = { ...params, key: googleKey };
      const response = await API.getMapLocation(paramSend);
      commit('SET_MAP_LOCATION', response?.data);
      return response?.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async [SET_CAT_DETAIL]({ commit }, detail) {
    try {
      await commit('SET_CAT_DETAIL', detail);
      return true;
    } catch (error) {
      throw new Error(error);
    }
  },
};
