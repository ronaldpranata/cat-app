import { shallowMount } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';
import Footer from '@/components/Footer.vue';

const i18n = createI18n({
  // vue-i18n options here ...
});
const factory = () => shallowMount(Footer, {
  global: {
    plugins: [i18n],
  },
});

describe('Footer', () => {
  test('mounts properly', () => {
    const wrapper = factory();
    expect(wrapper.vm).toBeTruthy();
  });

  test('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
