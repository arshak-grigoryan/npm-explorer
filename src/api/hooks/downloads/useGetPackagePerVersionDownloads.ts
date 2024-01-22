import { useParams } from 'react-router-dom';
import { npmApi } from 'src/api/configs';
import useFetch, { FetchResponse } from '../useFetch';

export type PerVersionDownloads = {
  data: {
    package: string;
    downloads: Record<string, number>;
  };
};

type PerVersionDownloadsResponse = FetchResponse & PerVersionDownloads;

export default function useGetPackagePerVersionDownloads() {
  const { name } = useParams();
  const url = name ? npmApi.getLastWeekPerVersionDownloadsUrl(name) : '';

  const res = useFetch(url) as PerVersionDownloadsResponse;

  return res;
}
