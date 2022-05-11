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
import CatTable from '@/components/CatTable.vue';
import { GET_CAT_BREEDS, SET_CAT_DETAIL } from '@/store/action_types';

export default {
  name: 'Home',
  components: {
    CatTable,
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  data() {
    return {
      links: [
        {
          url: '/',
          name: 'home',
        },
        {
          url: '/about',
          name: 'about',
        },
      ],
    };
  },
  computed: {
    tableHeader() {
      return this.$store.getters.getCatBreedColumn;
    },
    tableBody() {
      return _.map(this.$store.getters.getCatBreed, (o) => ({
        image: o?.image?.url,
        name: o.name,
      }));
    },
  },
  methods: {
    async gotoDetail(name) {
      const filterCat = _.find(
        this.$store.getters.getCatBreed,
        (o) => o.name === name,
      );
      await this.$store.dispatch(SET_CAT_DETAIL, filterCat);
      await this.$router.push({ path: '/catDetail' });
    },
  },
  async created() {
    await this.$store.dispatch(GET_CAT_BREEDS);
  },
};
</script>
