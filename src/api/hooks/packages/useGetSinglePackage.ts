import { useParams } from 'react-router-dom';
import { npmRegistry } from 'src/api/configs';
import useFetch, { FetchResponse } from '../useFetch';

export interface SinglePackage {
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
    homepage?: string;
    repository: {
      url: string;
    };
    license: string;
    maintainers: Array<{ name: string; email: string }>;
  };
}

export type SinglePackageResponse = FetchResponse<SinglePackage>;

export default function useGetSinglePackage() {
  const { name } = useParams();
  const url = name ? npmRegistry.getSinglePackageUrl(name) : '';

  const res = useFetch<SinglePackage>(url);

  return res;
}
