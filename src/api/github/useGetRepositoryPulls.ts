import useFetch, { FetchResponse } from '../hooks/useFetch';
import { githubApi } from '../configs';

export type RepositoryPulls = {
  data: [];
};

export type RepositoryPullsResponse = FetchResponse & RepositoryPulls;

export default function useGetRepositoryPulls(owner: string, repo: string) {
  const url = owner && repo ? githubApi.getRepoPullsApiUrl(owner, repo) : '';

  const res = useFetch(url) as RepositoryPullsResponse;
  return res;
}
