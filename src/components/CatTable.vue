<template>
  <div class="table">
    <div class="row header">
      <div class="column" v-for="(item, index) in headers" :key="index">
        {{ item }}
      </div>
    </div>
    <div
      class="row body clickable"
      v-for="(item, index) in body"
      :key="index"
      :id="item?.name"
      v-on:click="gotoDetail(item?.name)"
    >
      <div class="column" v-for="(value, key) in item" :key="key">
        <span v-if="key == 'image'" :class="key" >
          <img :src="value" width="60" />
        </span>
        <span v-else :class="key"  >
          {{ value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'CatTable',
  props: {
    headers: Array,
    body: Array,
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  methods: {
    gotoDetail(name) {
      this.$emit('gotoDetail', name);
    },
  },
});
</script>
<style scoped lang='scss'>
.table {
  max-width: 500px;
  margin: auto;

  .row {
    display: flex;
    flex-direction: row;
    padding: 10px;

    &.header {
      font-weight: bold;
      padding: 10px;
    }
  }

  .column {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
}
</style>
