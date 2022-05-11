import { shallowMount } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';
import Header from '@/components/Header.vue';

const i18n = createI18n({
  // vue-i18n options here ...
});
const factory = () => shallowMount(Header, {
  propsData: {
    links:
      [
        {
          url: '/',
          name: 'home',
        },
        {
          url: '/about',
          name: 'about',
        },
      ],
  },
  global: {
    plugins: [i18n],
  },
});

describe('Header', () => {
  test('mounts properly', () => {
    const wrapper = factory();
    expect(wrapper.vm).toBeTruthy();
  });

  test('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
