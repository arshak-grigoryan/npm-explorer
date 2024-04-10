import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { npmApi } from 'src/api/configs';
import { FetchResponse } from '../useFetch';
import useBulkFetch from '../useBulkFetch';
import { getDateRanges, getFormatedDate } from '../utils';
import { PackageDownloads } from '../types';

export type PackageDownloadsRangeResponse = FetchResponse<PackageDownloads>;

export default function useGetPackageDownloadsRange(startMillis: number, endMillis: number) {
  const { name } = useParams();

  const dateRangeList = useMemo(
    () => getDateRanges(startMillis, endMillis),
    [startMillis, endMillis],
  );

  const urls = name
    ? dateRangeList.map(({ start, end }) =>
        npmApi.getPackageDownloadsRangeUrl(
          getFormatedDate(new Date(start).getTime()),
          getFormatedDate(new Date(end).getTime()),
          name,
        ),
      )
    : [];

  const res = useBulkFetch<PackageDownloads>(urls);

  return res;
}
