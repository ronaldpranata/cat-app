<template>
  <div class="detail">
    <CatDetail :cat="catDetail" />
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import CatDetail from '@/components/CatDetail.vue';

export default {
  name: 'Detail',
  components: {
    CatDetail,
  },
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const router = useRouter();
    const catDetail = computed(() => store.getters.getCatDetail);
    onMounted(() => {
      if (!catDetail.value) {
        router.push({ path: '/' });
      }
    });
    return { t, catDetail };
  },

};
</script>
