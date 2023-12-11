import { useEffect, useMemo, useState } from 'react';
import { PackageResponse } from '../types';
import { useSearchParams } from 'react-router-dom';
import { BASE_URL } from '../api/configs';

export default function useGetPackages() {
  const [error, setError] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<PackageResponse | null>(null);

  const searchString = searchParams.get('text') ?? '';
  const popularity = searchParams.get('popularity') ?? 0;
  const quality = searchParams.get('quality') ?? 0;
  const maintenance = searchParams.get('maintenance') ?? 0;
  const from = searchParams.get('from');

  const isSortOptionsAvailable = popularity || quality || maintenance;

  // TODO: check for url validity
  const url = useMemo(() => {
    if (isSortOptionsAvailable && !from) {
      return `${BASE_URL}?text=${searchString}&popularity=${popularity}&quality=${quality}&maintenance=${maintenance}`;
    }
    if (isSortOptionsAvailable && from) {
      return `${BASE_URL}?text=${searchString}&popularity=${popularity}&quality=${quality}&maintenance=${maintenance}&from=${from}`;
    }
    if (!isSortOptionsAvailable && from) {
      return `${BASE_URL}?text=${searchString}&from=${from}`;
    }

    return `${BASE_URL}?text=${searchString}`;
  }, [searchString, popularity, quality, maintenance, from]);

  useEffect(() => {
    const controller = new AbortController();
    async function getPackages() {
      if (searchString) {
        setIsFetching(true);
        setIsFetched(false);
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
          setIsFetched(true);
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
    isFetched,
  };
}
