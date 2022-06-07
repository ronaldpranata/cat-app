<template>
  <div class="home">
    <h1>{{ t("message") }}</h1>
    <div class="error" v-if="error" >{{error}}</div>
    <div class="loading" v-if="loading">Loading.....<br/><br/><br/></div>
    <CatTable
      v-else-if="!error"
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
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import CatTable from '@/components/CatTable.vue';
import useCatBreed from '@/composables/useCatBreed';

export default {
  name: 'Home',
  components: {
    CatTable,
  },
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const { cats, loading, error } = useCatBreed();
    const tableHeader = [t('image'), t('name')];
    const tableBody = computed(() => _.map(cats.value, (o) => ({
      image: o?.image?.url,
      name: o?.name,
    })));

    async function gotoDetail(name) {
      await router.push({ path: `/catDetail/${name}` });
    }
    return {
      t, tableHeader, tableBody, gotoDetail, loading, error,
    };
  },
};
</script>
