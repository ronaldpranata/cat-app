<template>
   <div id="footer">
       {{ t('copyright') }}
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Footer',
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>
