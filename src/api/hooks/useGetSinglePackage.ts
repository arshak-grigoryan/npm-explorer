import { npmRegistry } from '../configs';
import { useParams } from 'react-router-dom';
import useFetch, { FetchResponse } from './useFetch';

type SinglePackageResponse = FetchResponse & {
  data: {
    readme: string;
    'dist-tags': {
      latest: string;
    };
    versions: Record<
      string,
      {
        readme: string;
        version: string;
      }
    >;
  };
};

export default function useGetSinglePackage() {
  const { name: packageName } = useParams();
  const url = packageName ? `${npmRegistry.base}/${packageName}` : '';

  const res = useFetch(url) as SinglePackageResponse;

  return res;
}
