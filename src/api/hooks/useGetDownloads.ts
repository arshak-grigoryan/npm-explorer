import useFetch, { FetchResponse } from './useFetch';

type DownloadsPointResponse = FetchResponse & {
  data: {
    downloads: number;
  };
};

export default function useGetLastDayDownloads(url: string) {
  const res = useFetch(url) as DownloadsPointResponse;

  return res;
}
