import { useMemo } from 'react';
import { NPM_SEARCH_URL, SEARCH_PARAMS, perPage } from '../configs';
import useGetSearchParams from '../../hooks/useGetSearchParams';
import useFetch, { FetchResponse } from './useFetch';

type PackageObject = {
  package: {
    name: string;
    scope: string;
    version: string;
    description: string;
    keywords: string[];
    date: string;
    links: {
      npm: string;
      homepage: string;
      repository: string;
      bugs: string;
    };
    publisher: {
      username: string;
      email: string;
    };
    maintainers: {
      username: string;
      email: string;
    }[];
  };
  flags: {
    insecure: number;
  };
  score: {
    final: number;
    detail: {
      quality: number;
      popularity: number;
      maintenance: number;
    };
  };
  searchScore: number;
};

type SearchPackageResponse = FetchResponse & {
  data: {
    objects: PackageObject[];
    total: number;
    time: string;
  };
};

export default function useGetPackages() {
  const searchString = useGetSearchParams(SEARCH_PARAMS.text, '');
  const popularity = useGetSearchParams(SEARCH_PARAMS.popularity, 0);
  const quality = useGetSearchParams(SEARCH_PARAMS.quality, 0);
  const maintenance = useGetSearchParams(SEARCH_PARAMS.maintenance, 0);
  const page = useGetSearchParams(SEARCH_PARAMS.page, 1);

  const from = page * perPage - perPage;

  const isSortOptionsAvailable = popularity || quality || maintenance;

  // TODO: check for url validity
  const url = useMemo(() => {
    if (isSortOptionsAvailable && !from) {
      return `${NPM_SEARCH_URL}?${SEARCH_PARAMS.text}=${searchString}&${SEARCH_PARAMS.popularity}=${popularity}&${SEARCH_PARAMS.quality}=${quality}&${SEARCH_PARAMS.maintenance}=${maintenance}`;
    }
    if (isSortOptionsAvailable && from) {
      return `${NPM_SEARCH_URL}?${SEARCH_PARAMS.text}=${searchString}&${SEARCH_PARAMS.popularity}=${popularity}&${SEARCH_PARAMS.quality}=${quality}&${SEARCH_PARAMS.maintenance}=${maintenance}&${SEARCH_PARAMS.from}=${from}`;
    }
    if (!isSortOptionsAvailable && from) {
      return `${NPM_SEARCH_URL}?${SEARCH_PARAMS.text}=${searchString}&${SEARCH_PARAMS.from}=${from}`;
    }

    return `${NPM_SEARCH_URL}?${SEARCH_PARAMS.text}=${searchString}`;
  }, [searchString, popularity, quality, maintenance, from]);

  const res = useFetch(url) as SearchPackageResponse;

  return res;
}
