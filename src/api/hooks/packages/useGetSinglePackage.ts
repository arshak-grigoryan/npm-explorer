import { npmRegistry } from '../../configs';
import { useParams } from 'react-router-dom';
import useFetch, { FetchResponse } from '../useFetch';

export type SinglePackage = {
  data: {
    name: string;
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
    homepage: string;
    repository: {
      url: string;
    };
    license: string;
  };
};

type SinglePackageResponse = FetchResponse & SinglePackage;

export default function useGetSinglePackage() {
  const { name } = useParams();
  const url = name ? `${npmRegistry.base}/${name}` : '';

  const res = useFetch(url) as SinglePackageResponse;

  return res;
}
