import { useParams } from 'react-router-dom';
import { npmRegistry } from 'src/api/configs';
import useFetch, { FetchResponse } from '../useFetch';

export type SinglePackageversion = {
  data: {
    dependencies: Record<string, string>;
    peerDependencies: Record<string, string>;
    devDependencies: Record<string, string>;
  };
};

type SinglePackageResponse = FetchResponse & SinglePackageversion;

export default function useGetSinglePackageVersion() {
  const { name, version } = useParams();
  const url = name && version ? npmRegistry.getSinglePackageVersionUrl(name, version) : '';

  const res = useFetch(url) as SinglePackageResponse;

  return res;
}
