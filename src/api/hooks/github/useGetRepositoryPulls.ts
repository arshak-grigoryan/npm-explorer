import useFetch, { FetchResponse } from '../useFetch';
import { githubApi } from '../../configs';

export interface RepositoryPulls {
  data: [];
}

export type RepositoryPullsResponse = FetchResponse<RepositoryPulls>;

export default function useGetRepositoryPulls(owner: string, repo: string) {
  const url = owner && repo ? githubApi.getRepoPullsApiUrl(owner, repo) : '';

  const res = useFetch<RepositoryPulls>(url);
  return res;
}
