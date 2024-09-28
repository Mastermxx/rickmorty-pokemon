export function useFetchData<T>(fetchFunction: (id?: string) => Promise<T>) {
  const data = ref<T | null>(null)
  const status = ref('pending')
  const error = ref<any>(null)
  const fetchData = async (id?: string) => {
    try {
      data.value = await fetchFunction(id)
      status.value = 'success'
    }
    catch (err) {
      status.value = 'error'
      error.value = err
    }
  }

  return { data, status, error, fetchData }
}
