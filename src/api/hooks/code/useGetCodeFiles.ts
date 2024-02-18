import useFetch, { FetchResponse } from '../useFetch';

export type PathObj = {
  contentType: string;
  size: number;
  path: string;
  hex: string;
  isBinary: boolean;
};

export type CodeFiles = {
  data: {
    files: Record<string, PathObj>;
  };
};

export type CodeFilesResponse = FetchResponse & CodeFiles;

export default function useGetCodeFiles(url: string) {
  const res = useFetch(url) as CodeFilesResponse;

  return res;
}
