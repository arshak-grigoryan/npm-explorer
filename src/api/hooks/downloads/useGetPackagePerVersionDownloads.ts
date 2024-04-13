import { npmApi } from 'src/api/configs';
import useUrlParams from 'src/hooks/useUrlParams';
import useFetch, { FetchResponse } from '../useFetch';

export interface PerVersionDownloads {
  data: {
    package: string;
    downloads: Record<string, number>;
  };
}

export type PerVersionDownloadsResponse = FetchResponse<PerVersionDownloads>;

export default function useGetPackagePerVersionDownloads() {
  const { name } = useUrlParams();
  const url = name ? npmApi.getLastWeekPerVersionDownloadsUrl(name) : '';

  const res = useFetch<PerVersionDownloads>(url);

  return res;
}
