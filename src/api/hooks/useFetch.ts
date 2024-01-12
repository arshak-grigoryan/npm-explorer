import { useEffect, useState } from 'react';

export type FetchResponse = {
  data: unknown | null,
  error: Error | null,
  isFetching: boolean,
  isStartedFetch: boolean,
}

// TODO: Memoize response
export default function useFetch(url: string): FetchResponse {
  const [error, setError] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isStartedFetch, setIsStartedFetched] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getPackages() {
      if (url) {
        setIsFetching(true);
        setIsStartedFetched(false);
        try {
          const response = await fetch(url, { signal: controller.signal });
          if (controller.signal.aborted) {
            return;
          }
          if (response.status >= 500) {
            setError(new Error(response.statusText));
          }
          const result = await response.json();
          if (result.error) {
            setError(new Error(result.error));
          } else {
            setData(result);
          }
          setIsFetching(false);
          setIsStartedFetched(true);
        } catch (error: any) {
          if (error.name !== 'AbortError') {
            setError(error);
          }
        }
      }
    }

    getPackages();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    error,
    isFetching,
    isStartedFetch,
  };
}
