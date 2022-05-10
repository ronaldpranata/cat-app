<template>
    <div id="nav">
        <span v-for="(item,index) in links" :key="index">
            <router-link  :to="item.url">{{ t(item.name) }} </router-link> <span v-if="index!=(links.length-1)">|</span>
        </span>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Header',
  props: {
    links: Array,
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>
<style scoped lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
