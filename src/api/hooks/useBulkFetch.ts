import { isEqual } from 'lodash';
import { useEffect, useRef, useState } from 'react';

export type FetchResponse = {
  data: unknown | null;
  error: Error | null;
  loading: boolean;
};

const cache = new Map();

export default function useBulkFetch(urls: string[]): FetchResponse {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<any[] | null>(null);
  const ref = useRef<string[]>();

  useEffect(() => {
    async function getPackages() {
      const cached = cache.get(urls);
      if (!urls.length || isEqual(ref.current, urls) || cached) {
        cached && setData(cache.get(urls));
        setLoading(false);
        return;
      }
      setLoading(true);
      ref.current = urls;
      try {
        const response = await Promise.all(urls.map((url) => fetch(url)));
        const result = await Promise.all(response.map((r) => r.json()));
        cache.set(urls, result);
        setData(result);
      } catch (error) {
        setError(error as Error);
      }
      setLoading(false);
    }

    getPackages();
  }, [urls]);

  return { data, error, loading };
}
