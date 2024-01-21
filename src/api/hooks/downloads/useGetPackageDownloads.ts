import useFetch, { FetchResponse } from '../useFetch';

export type Downloads = {
  data: {
    downloads: number;
  };
};

type DownloadsPointResponse = FetchResponse & Downloads;

export default function useGetPackageDownloads(url: string) {
  const res = useFetch(url) as DownloadsPointResponse;

  return res;
}
