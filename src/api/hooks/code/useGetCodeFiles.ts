import useFetch, { FetchResponse } from '../useFetch';

export interface PathObj {
  contentType: string;
  size: number;
  path: string;
  hex: string;
  isBinary: boolean;
}

export interface CodeFiles {
  data: {
    files: Record<string, PathObj>;
  };
}

export type CodeFilesResponse = FetchResponse<CodeFiles>;

export default function useGetCodeFiles(url: string) {
  const res = useFetch<CodeFiles>(url);

  return res;
}
