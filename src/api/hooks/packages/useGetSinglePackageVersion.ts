import { npmRegistry } from 'src/api/configs';
import useUrlParams from 'src/hooks/useUrlParams';
import useFetch, { FetchResponse } from '../useFetch';

export interface SinglePackageversion {
  data: {
    dependencies: Record<string, string>;
    peerDependencies: Record<string, string>;
    devDependencies: Record<string, string>;
    dist: {
      fileCount: number;
      unpackedSize: number;
    };
  };
}

export type SinglePackageVersionResponse = FetchResponse<SinglePackageversion>;

export default function useGetSinglePackageVersion() {
  const { name, version } = useUrlParams();
  const url = name ? npmRegistry.getSinglePackageVersionUrl(name, version) : '';

  const res = useFetch<SinglePackageversion>(url);

  return res;
}
