type UseFetchType = typeof useFetch

export const useApi: UseFetchType = (path, options = {}) => {
  const config = useRuntimeConfig();

  options.baseURL = config.public.baseURL;
  return useFetch(path, options);
};
