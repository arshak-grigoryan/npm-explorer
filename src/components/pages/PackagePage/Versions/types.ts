import { PerVersionDownloads } from 'src/api/hooks/downloads/useGetPackagePerVersionDownloads';
import { SinglePackage } from 'src/api/hooks/packages/useGetSinglePackage';

export type VersionHistoryStats = [string, number, Date][];
export type CurrentTagsStats = [string, number, string][];

export type VersionListProps = {
  data: VersionHistoryStats | CurrentTagsStats;
  packageName: string;
};

export type VersionsContainerProps = {
  data: { downloadsData: PerVersionDownloads['data']; packageData: SinglePackage['data'] };
};
