import { npmRegistry } from '../configs';
import { useParams } from 'react-router-dom';
import useFetch, { FetchResponse } from './useFetch';

export type SinglePackage = {
  data: {
    readme: string;
    'dist-tags': {
      latest: string;
      [tag: string]: string;
    };
    versions: Record<
      string,
      {
        readme: string;
        version: string;
      }
    >;
    time: { [version: string]: Date; modified: Date; created: Date };
  };
};

type SinglePackageResponse = FetchResponse & SinglePackage;

export default function useGetSinglePackage() {
  const { name: packageName } = useParams();
  const url = packageName ? `${npmRegistry.base}/${packageName}` : '';

  const res = useFetch(url) as SinglePackageResponse;

  return res;
}
