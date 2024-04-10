import useFetch, { FetchResponse } from '../useFetch';

export interface Downloads {
  data: {
    downloads: number;
  };
}

export type DownloadsPointResponse = FetchResponse<Downloads>;

export default function useGetPackageDownloads(url: string) {
  const res = useFetch<Downloads>(url);

  return res;
}
