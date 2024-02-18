import useFetch, { ContentType, FetchResponse } from '../useFetch';

export type FileCode = {
  data: string;
};

export type FileCodeResponse = FetchResponse & FileCode;

export default function useGetFileCode(url: string) {
  const res = useFetch(url, ContentType.binary) as FileCodeResponse;

  return res;
}
