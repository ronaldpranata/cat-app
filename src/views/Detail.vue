<template>
  <div class="detail">
    <div class="error" v-if="error" >{{error}}</div>
    <div class="loading" v-if="loading">Loading.....<br/><br/><br/></div>
    <CatDetail v-else-if="!error" :cat="catDetail" />
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import CatDetail from '@/components/CatDetail.vue';
import useCatBreed from '@/composables/useCatBreed';
import _ from 'lodash';

export default {
  name: 'Detail',
  components: {
    CatDetail,
  },
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const { cats, loading, error } = useCatBreed();
    const catDetail = computed(() => _.find(
      cats.value,
      (o) => o.name === route?.params?.name,
    ));

    return {
      t, catDetail, loading, error,
    };
  },

};
</script>
