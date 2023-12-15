import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useGetSearchParams(name: string, defaultValue?: any) {
  const [searchParams] = useSearchParams();

  return useMemo(() => searchParams.get(name) || defaultValue, [searchParams, name, defaultValue]);
}
