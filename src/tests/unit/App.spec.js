import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  // vue-i18n options here ...
});

const factory = () => mount(App, {
  global: {
    plugins: [i18n],
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
