import API from '../api/index';
import {
  GET_CAT_LIST,
  GET_CAT_BREEDS,
} from './action_types';

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
  async [GET_CAT_LIST]({ commit }, params) {
    try {
      const response = await API.getCatImages(params);
      commit('SET_CAT_LIST', response?.data);
      return response?.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
