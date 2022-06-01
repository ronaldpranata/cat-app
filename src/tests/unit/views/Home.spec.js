import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Home from '@/views/Home.vue';
import CatTable from '@/components/CatTable.vue';
import mockCatBreeds from '@/__mock__/mock';
import { createI18n } from 'vue-i18n';
import state from '@/store/state';
import mutations from '@/store/mutations';
import getters from '@/store/getters';
import {
  GET_CAT_BREEDS,
} from '@/store/action_types';

const i18n = createI18n({
  // vue-i18n options here ...
});

const actions = {
  async [GET_CAT_BREEDS]({ commit }) {
    try {
      const response = await new Promise((resolve) => {
        resolve(mockCatBreeds);
      });
      commit('SET_CAT_BREEDS', response?.data);
      return response?.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
const store = createStore({
  state,
  actions,
  mutations,
  getters,
});

const factory = () => mount(Home, {
  global: {
    plugins: [i18n, store],
  },
});

describe('Home', () => {
  test('renders a CatTable', () => {
    const wrapper = factory();
    const component = wrapper.findComponent(CatTable);
    expect(component.exists()).toBeTruthy();
  });

  test('mounts properly', () => {
    const wrapper = factory();
    expect(wrapper.vm).toBeTruthy();
  });

  test('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
