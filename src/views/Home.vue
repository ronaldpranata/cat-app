<template>
  <div class="home">
    <h1>{{ t("message") }}</h1>
    <CatTable
      :body="tableBody"
      :headers="tableHeader"
      @gotoDetail="gotoDetail"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import * as _ from 'lodash';
import { useI18n } from 'vue-i18n';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import CatTable from '@/components/CatTable.vue';
import { GET_CAT_BREEDS, SET_CAT_DETAIL } from '@/store/action_types';

export default {
  name: 'Home',
  components: {
    CatTable,
  },
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const router = useRouter();
    const links = [
      {
        url: '/',
        name: 'home',
      },
      {
        url: '/about',
        name: 'about',
      },
    ];
    const tableHeader = computed(() => store.getters.getCatBreedColumn);
    const tableBody = computed(() => _.map(store.getters.getCatBreed, (o) => ({
      image: o?.image?.url,
      name: o.name,
    })));

    async function gotoDetail(name) {
      const filterCat = _.find(
        store.getters.getCatBreed,
        (o) => o.name === name,
      );
      await store.dispatch(SET_CAT_DETAIL, filterCat);
      await router.push({ path: '/catDetail' });
    }

    onMounted(async () => {
      await store.dispatch(GET_CAT_BREEDS);
    });

    return {
      t, tableHeader, tableBody, links, gotoDetail,
    };
  },
};
</script>
