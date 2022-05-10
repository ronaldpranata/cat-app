<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />
    <CatTable :body='tableBody' :headers='tableHeader' />
  </div>
</template>

<script>
// @ is an alias to /src
import * as _ from 'lodash';
import CatTable from '@/components/CatTable.vue';
import { GET_CAT_BREEDS } from '@/store/action_types';

export default {
  name: 'Home',
  components: {
    CatTable,
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
      return _.map(this.$store.getters.getCatBreed, (o) => ({ image: o?.image?.url, name: o.name }));
    },
  },
  async created() {
    await this.$store.dispatch(GET_CAT_BREEDS);
  },
};
</script>
