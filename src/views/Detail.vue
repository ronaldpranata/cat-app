<template>
  <div class="detail">
    <CatDetail :cat="catDetail" />
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import CatDetail from '@/components/CatDetail.vue';

export default {
  name: 'Detail',
  components: {
    CatDetail,
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  computed: {
    catDetail() {
      return this.$store.getters.getCatDetail;
    },
  },
  async mounted() {
    if (!this.catDetail) {
      this.$router.push({ path: '/' });
    }
  },
};
</script>
