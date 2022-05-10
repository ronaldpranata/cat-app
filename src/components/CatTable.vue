<template>
  <div class='table'>
    <div class='row header'>
      <div class='column' v-for='(item, index) in headers' :key='index'>
        {{ item }}
      </div>
    </div>
    <div class='row' v-for='(item, index) in body' :key='index'>
      <div class='column' v-for='(value, key) in item' :key='key'>
        <span v-if="key=='image'">
          <img :src="value" width="60" />
        </span>
         <span v-else>
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
});
</script>
<style scoped lang='scss'>
.table {
  max-width: 500px;
  margin: auto;
  .row {
    display: flex;
    flex-direction: row;
  }
  .column {
    display: flex;
    flex:1;
    flex-direction: column;
  }
}
</style>
