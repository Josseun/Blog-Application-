import { ref, watchEffect } from "vue";

function useFetch(url) {
  const data = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const meta = ref(null);

  const fetchData = async () => {
    if (!url) return;

    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(url);
      console.log(!response.ok, "res");
      if (!response.ok) {
        throw new Error(`failed to fetch data: ${response.status}`);
      }
      const result = await response.json();

      data.value = result.data || result;
      meta.value = result.meta || null;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  watchEffect(() => {
    if (url) {
      fetchData();
    }
  });

  return { data, loading, error, meta, refetch: fetchData };
}

export default useFetch;
