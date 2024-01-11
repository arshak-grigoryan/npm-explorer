import { useEffect, useState } from 'react';
import { npmRegistry } from '../configs';
import { useParams } from 'react-router-dom';
import { SinglePackageResponse } from '../types/singlePackage';

export default function useGetSinglePackage() {
  const [error, setError] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState<SinglePackageResponse | null>(null);

  const { name: packageName } = useParams();
  const url = packageName ? `${npmRegistry.base}/${packageName}` : '';

  useEffect(() => {
    const controller = new AbortController();
    async function getPackages() {
      if (packageName) {
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
