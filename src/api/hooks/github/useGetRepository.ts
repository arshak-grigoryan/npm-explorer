import useFetch, { FetchResponse } from '../useFetch';
import { githubApi } from '../../configs';

export interface Repository {
  data: {
    open_issues_count: number;
  };
}

export type RepositoryResponse = FetchResponse<Repository>;

export default function useGetRepository(owner: string, repo: string) {
  const url = owner && repo ? githubApi.getRepoApiUrl(owner, repo) : '';

  const res = useFetch<Repository>(url);
  return res;
}
