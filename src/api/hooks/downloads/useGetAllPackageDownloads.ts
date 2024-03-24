import { earlestDate, npmApi } from 'src/api/configs';
import { FetchResponse } from '../useFetch';
import useBulkFetch from '../useBulkFetch';
import { getDateRanges, getFormatedDate } from '../utils';
import { PackageDownloads } from '../types';
import { PackageDownloadsRangeResponse } from './useGetPackageDownloadsRange';

export type AllPackageDownloadsRangeResponse = FetchResponse & PackageDownloads;

const startMillis = earlestDate.getTime();
const endMillis = new Date().getTime();
const dateRangeList = getDateRanges(startMillis, endMillis);
const urls = dateRangeList.map(({ start, end }) =>
  npmApi.getAllPackageDownloadsRangeUrl(
    getFormatedDate(new Date(start).getTime()),
    getFormatedDate(new Date(end).getTime()),
  ),
);

export default function useGetAllPackageDownloads() {
  return useBulkFetch(urls) as PackageDownloadsRangeResponse;
}
