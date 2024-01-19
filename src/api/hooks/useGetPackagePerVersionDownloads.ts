import { NPM_PER_VERSION_DOWNLOADS, npmApi } from '../configs';
import { useParams } from 'react-router-dom';
import useFetch, { FetchResponse } from './useFetch';

export type PerVersionDownloads = {
  data: {
    package: string;
    downloads: Record<string, number>;
  };
};

type PerVersionDownloadsResponse = FetchResponse & PerVersionDownloads;

export default function useGetPackagePerVersionDownloads() {
  const { name } = useParams();
  const url = name ? `${NPM_PER_VERSION_DOWNLOADS}/${name}/${npmApi.lastWeek}` : '';

  const res = useFetch(url) as PerVersionDownloadsResponse;

  return res;
}
