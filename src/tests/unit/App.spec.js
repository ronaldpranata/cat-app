import { mount } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '@/App.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
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
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});

const factory = () => mount(App, {
  global: {
    plugins: [i18n, Vuex],
    mocks: {
      $store: store,
    },
  },
});

describe('App', () => {
  test('renders a Header', () => {
    const wrapper = factory();
    const component = wrapper.findComponent(Header);
    expect(component.exists()).toBeTruthy();
  });

  test('renders a Footer', () => {
    const wrapper = factory();
    const component = wrapper.findComponent(Footer);
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
