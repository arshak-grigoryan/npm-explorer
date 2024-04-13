import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export default function useUrlParams() {
  const { name, version } = useParams();

  return useMemo(() => {
    return {
      name,
      version,
    };
  }, [name, version]);
}
