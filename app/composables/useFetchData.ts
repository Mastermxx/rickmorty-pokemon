import { ref } from 'vue';

export function useFetchData(fetchFunction: Function) {
  const data = ref(null);
  const status = ref('pending');
  const error = ref(null);

  const fetchData = async (id?: string) => {
    try {
      data.value = await fetchFunction(id);
      status.value = 'success';
    } catch (err) {
      status.value = 'error';
      error.value = err;
    }
  };

  return { data, status, error, fetchData };
}
