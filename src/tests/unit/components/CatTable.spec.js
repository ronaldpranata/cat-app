import { shallowMount } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';
import CatTable from '@/components/CatTable.vue';

const i18n = createI18n({
  // vue-i18n options here ...
});
const factory = () => shallowMount(CatTable, {
  propsData: {
    header: ['test', 'test'],
    body:
      [
        {
          image: 'image',
          name: 'cat1',
        },
        {
          image: 'image2',
          name: 'cat2',
        },
      ],
  },
  global: {
    plugins: [i18n],
  },
});

describe('CatTable', () => {
  test('mounts properly', () => {
    const wrapper = factory();
    expect(wrapper.vm).toBeTruthy();
  });

  test('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
