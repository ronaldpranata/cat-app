import { createApp } from 'vue';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

createApp(App).use(i18n).use(i18n).use(i18n)
  .use(i18n)
  .use(store)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: process.env.VUE_APP_GMAP_KEY,
    },
  })
  .mount('#app');
