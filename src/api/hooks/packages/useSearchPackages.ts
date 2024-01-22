import { useMemo } from 'react';
import { PAGE, PER_PAGE_PACKAGES_COUNT, npmRegistry } from 'src/api/configs';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import useFetch, { FetchResponse } from '../useFetch';

export type PackageObject = {
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

export type SearchPackage = {
  data: {
    objects: PackageObject[];
    total: number;
    time: string;
  };
};

type SearchPackageResponse = FetchResponse & SearchPackage;

const {
  searchUrl,
  searchParams: { text: t, popularity: p, quality: q, maintenance: m, from: f },
} = npmRegistry;

export default function useSearchPackages() {
  const text = useGetSearchParams(t, '');
  const popularity = useGetSearchParams(p, 0);
  const quality = useGetSearchParams(q, 0);
  const maintenance = useGetSearchParams(m, 0);
  const page = useGetSearchParams(PAGE, 1);

  const from = page * PER_PAGE_PACKAGES_COUNT - PER_PAGE_PACKAGES_COUNT;

  const isSortable = popularity || quality || maintenance;

  // TODO: check for url validity
  const url = useMemo(() => {
    if (isSortable && !from) {
      return `${searchUrl}?${t}=${text}&${p}=${popularity}&${q}=${quality}&${m}=${maintenance}`;
    }
    if (isSortable && from) {
      return `${searchUrl}?${t}=${text}&${p}=${popularity}&${q}=${quality}&${m}=${maintenance}&${f}=${from}`;
    }
    if (!isSortable && from) {
      return `${searchUrl}?${t}=${text}&${f}=${from}`;
    }

    return `${searchUrl}?${t}=${text}`;
  }, [text, popularity, quality, maintenance, from, isSortable]);

  const res = useFetch(url) as SearchPackageResponse;

  return res;
}
