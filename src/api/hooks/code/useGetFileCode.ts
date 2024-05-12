import useFetch, { FetchResponse } from '../useFetch';

export interface FileCode {
  data: string;
}

export type FileCodeResponse = FetchResponse<FileCode>;

export default function useGetFileCode(url: string) {
  const res = useFetch<FileCode>(url);

  return res;
}
