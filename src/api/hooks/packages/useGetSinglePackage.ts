import { useParams } from 'react-router-dom';
import { npmRegistry } from 'src/api/configs';
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
    homepage?: string; // e.g. "dlx" package doesn't have "homepage" key
    repository: {
      url: string;
    };
    license: string;
  };
};

type SinglePackageResponse = FetchResponse & SinglePackage;

export default function useGetSinglePackage() {
  const { name } = useParams();
  const url = name ? npmRegistry.getSinglePackageUrl(name) : '';

  const res = useFetch(url) as SinglePackageResponse;

  return res;
}
