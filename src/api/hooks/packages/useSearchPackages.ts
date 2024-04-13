import { useMemo } from 'react';
import { PER_PAGE_PACKAGES_COUNT, npmRegistry } from 'src/api/configs';
import useUrlSearchParams from 'src/hooks/useUrlSearchParams';
import useFetch from '../useFetch';

export interface PackageObject {
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
}

export interface SearchPackage {
  data: {
    objects: PackageObject[];
    total: number;
    time: string;
  };
}

const {
  searchUrl,
  searchParams: { text: t, popularity: p, quality: q, maintenance: m, from: f },
} = npmRegistry;

export default function useSearchPackages() {
  const { searchText, popularity, quality, maintenance, page } = useUrlSearchParams();

  const from = page * PER_PAGE_PACKAGES_COUNT - PER_PAGE_PACKAGES_COUNT;

  const isSortable = popularity || quality || maintenance;

  // TODO: check for url validity
  const url = useMemo(() => {
    if (isSortable && !from) {
      return `${searchUrl}?${t}=${searchText}&${p}=${popularity}&${q}=${quality}&${m}=${maintenance}`;
    }
    if (isSortable && from) {
      return `${searchUrl}?${t}=${searchText}&${p}=${popularity}&${q}=${quality}&${m}=${maintenance}&${f}=${from}`;
    }
    if (!isSortable && from) {
      return `${searchUrl}?${t}=${searchText}&${f}=${from}`;
    }

    return `${searchUrl}?${t}=${searchText}`;
  }, [searchText, popularity, quality, maintenance, from, isSortable]);

  const res = useFetch<SearchPackage>(url);

  return res;
}
