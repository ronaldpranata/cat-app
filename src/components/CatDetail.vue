<template>
  <div class="cat">
    <a class="bold clickable" @click="$router.go(-1)">&laquo; back</a><br />
    <h1 class="title">{{ t('catDetail') + " " + cat?.name }}</h1>
    <img :src="cat?.image?.url" class="cat-image" />
    <table>
      <tr>
        <td class="bold">{{ t('description') }}</td>
        <td class="detail description" v-html="cat?.description"></td>
      </tr>
      <tr>
        <td class="bold">{{ t('maximumWeight') }}</td>
        <td class="detail weight">
          <div v-for="(weight, key) in cat?.weight" :key="key">
            {{ key }} : {{ weight }}
          </div>
        </td>
      </tr>
      <tr>
        <td class="bold">{{ t('averageLifespan') }}</td>
        <td class="detail life-span">{{ cat?.life_span }}</td>
      </tr>

      <tr>
        <td class="bold">{{ t('origin') }}</td>
        <td class="detail gmap">
          <GMapMap :center="center" v-if="center" :zoom="3" map-type-id="terrain" style="width: 500px; height: 300px">
            <GMapCluster v-if="markers.length > 0">
              <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                :draggable="true" @click="center = m.position" />
            </GMapCluster>
          </GMapMap>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { GET_ORIGIN_LOCATION } from '@/store/action_types';

export default defineComponent({
  name: 'CatDetail',
  props: {
    cat: Object,
  },
  setup(props) {
    const { t } = useI18n();
    const store = useStore();
    const center = computed(() => store.getters.getOriginMap?.results[0]?.geometry?.location);
    const markers = computed(() => [
      {
        position: center.value,
      },
    ]);
    onMounted(async () => {
      if (props.cat?.origin) {
        await store.dispatch(GET_ORIGIN_LOCATION, { address: props.cat.origin });
      }
    });
    return { t, center, markers };
  },
});
</script>
<style scoped lang='scss'>
.cat {
  max-width: 700px;
  margin: auto;

  .cat-image {
    max-width: 200px;
  }

  .bold {
    font-weight: bold;
  }

  .detail {
    text-align: left;
  }
}
</style>
