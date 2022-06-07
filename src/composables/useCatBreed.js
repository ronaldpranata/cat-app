import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { GET_CAT_BREEDS } from '@/store/action_types';

export default function useCatBreed() {
  const store = useStore();
  const error = ref(null);
  const loading = ref(false);
  const cats = computed(() => store.getters.getCatBreed);
  onMounted(async () => {
    try {
      loading.value = true;
      if (cats.value.length === 0) await store.dispatch(GET_CAT_BREEDS);
      loading.value = false;
    } catch (errorMessage) {
      loading.value = false;
      error.value = 'Oops something went wrong';
    }
  });

  return { cats, error, loading };
}
