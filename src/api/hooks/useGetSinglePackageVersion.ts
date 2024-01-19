import { npmRegistry } from '../configs';
import { useParams } from 'react-router-dom';
import useFetch, { FetchResponse } from './useFetch';

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
  const url = name ? `${npmRegistry.base}/${name}/${version ?? 'latest'}` : '';

  const res = useFetch(url) as SinglePackageResponse;

  return res;
}
