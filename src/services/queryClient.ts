import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // cacheTime: 1000 * 50 * 5,
      // staleTime: 1000 * 50 * 4,
      refetchOnWindowFocus: false,
    },
  },
});
