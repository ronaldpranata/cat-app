import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import CatDetail from '@/components/CatDetail.vue';
import { createI18n } from 'vue-i18n';
import state from '@/store/state';
import mutations from '@/store/mutations';
import getters from '@/store/getters';
import {
  GET_ORIGIN_LOCATION,
} from '@/store/action_types';

const i18n = createI18n({
  // vue-i18n options here ...
});

const map = {
  results: [
    {
      address_components: [
        {
          long_name: 'United Kingdom',
          short_name: 'GB',
          types: ['country', 'political'],
        },
      ],
      formatted_address: 'United Kingdom',
      geometry: {
        bounds: {
          northeast: {
            lat: 60.91569999999999,
            lng: 33.9165549,
          },
          southwest: {
            lat: 34.5614,
            lng: -8.8988999,
          },
        },
        location: {
          lat: 55.378051,
          lng: -3.435973,
        },
        location_type: 'APPROXIMATE',
        viewport: {
          northeast: {
            lat: 61.5471111,
            lng: 9.584415699999999,
          },
          southwest: {
            lat: 47.5554486,
            lng: -18.5319589,
          },
        },
      },
      place_id: 'ChIJqZHHQhE7WgIReiWIMkOg-MQ',
      types: ['country', 'political'],
    },
  ],
  status: 'OK',
};

const actions = {
  async [GET_ORIGIN_LOCATION]({ commit }) {
    try {
      const response = await new Promise((resolve) => {
        resolve(map);
      });
      commit('SET_MAP_LOCATION', response?.data);
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
const factory = () => shallowMount(CatDetail, {
  propsData: {
    cat: {
      image: {
        url: 'imgurl',
      },
      name: 'catName',
      description: 'catdescription',
      weight: {
        test: 'test',
      },
      life_span: '3-4',
      origin: 'United States',
    },
  },
  global: {
    plugins: [i18n],
    provide: {
      store,
    },
  },

});

describe('CatDetail', () => {
  test('mounts properly', () => {
    const wrapper = factory();
    expect(wrapper.vm).toBeTruthy();
  });

  test('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
