import { useEffect, useMemo, useState } from 'react';
import { PackageResponse } from '../types';
import { NPM_SEARCH_URL, SEARCH_PARAMS, perPage } from '../configs';
import useGetSearchParams from '../../hooks/useGetSearchParams';

export default function useGetPackages() {
  const [error, setError] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState<PackageResponse | null>(null);

  const searchString = useGetSearchParams(SEARCH_PARAMS.text, '');
  const popularity = useGetSearchParams(SEARCH_PARAMS.popularity, 0);
  const quality = useGetSearchParams(SEARCH_PARAMS.quality, 0);
  const maintenance = useGetSearchParams(SEARCH_PARAMS.maintenance, 0);
  const page = useGetSearchParams(SEARCH_PARAMS.page, 1);

  const from = page * perPage - perPage;

  const isSortOptionsAvailable = popularity || quality || maintenance;

  // TODO: check for url validity
  const url = useMemo(() => {
    if (isSortOptionsAvailable && !from) {
      return `${NPM_SEARCH_URL}?${SEARCH_PARAMS.text}=${searchString}&${SEARCH_PARAMS.popularity}=${popularity}&${SEARCH_PARAMS.quality}=${quality}&${SEARCH_PARAMS.maintenance}=${maintenance}`;
    }
    if (isSortOptionsAvailable && from) {
      return `${NPM_SEARCH_URL}?${SEARCH_PARAMS.text}=${searchString}&${SEARCH_PARAMS.popularity}=${popularity}&${SEARCH_PARAMS.quality}=${quality}&${SEARCH_PARAMS.maintenance}=${maintenance}&${SEARCH_PARAMS.from}=${from}`;
    }
    if (!isSortOptionsAvailable && from) {
      return `${NPM_SEARCH_URL}?${SEARCH_PARAMS.text}=${searchString}&${SEARCH_PARAMS.from}=${from}`;
    }

    return `${NPM_SEARCH_URL}?${SEARCH_PARAMS.text}=${searchString}`;
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
