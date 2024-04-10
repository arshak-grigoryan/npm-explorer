import { useEffect, useState } from 'react';

export interface FetchResponse<Data> {
  data: Data | null;
  error: Error | null;
  loading: boolean;
}

export enum ContentType {
  json = 'application/json',
  binary = 'application/octet-stream',
}

const cache = new Map();

export default function useFetch<ResponseData>(
  url: string,
  contentType: string = ContentType.json,
): FetchResponse<ResponseData> {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<ResponseData | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getPackages() {
      const cached = cache.get(url);
      if (!url || cached) {
        cached && setData(cache.get(url));
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (controller.signal.aborted) {
          throw new Error('Signal was aborted');
        }
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let result;
        if (contentType === ContentType.binary) {
          const buffer = await response.arrayBuffer();
          const decoder = new TextDecoder('utf-8');
          result = decoder.decode(buffer);
        } else {
          result = await response.json();
        }
        if (result.error) {
          throw new Error(result.error);
        } else {
          cache.set(url, result);
          setData(result);
        }
      } catch (error) {
        setError(error as Error);
      }
      setLoading(false);
    }

    getPackages();

    return () => controller.abort();
  }, [url, contentType]);

  return { data, error, loading };
}
