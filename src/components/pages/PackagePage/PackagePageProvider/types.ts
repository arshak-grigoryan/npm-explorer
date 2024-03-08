import { Dispatch, SetStateAction } from 'react';
import { RepositoryResponse } from 'src/api/github/useGetRepository';
import { RepositoryPullsResponse } from 'src/api/github/useGetRepositoryPulls';
import { CodeFilesResponse } from 'src/api/hooks/code/useGetCodeFiles';
import { FileCodeResponse } from 'src/api/hooks/code/useGetFileCode';
import { DownloadsPointResponse } from 'src/api/hooks/downloads/useGetPackageDownloads';
import { PerVersionDownloadsResponse } from 'src/api/hooks/downloads/useGetPackagePerVersionDownloads';
import { SinglePackageResponse } from 'src/api/hooks/packages/useGetSinglePackage';
import { SinglePackageVersionResponse } from 'src/api/hooks/packages/useGetSinglePackageVersion';

export type PackagePageContextType = {
  singlePackagesRes: SinglePackageResponse;
  singlePackageVersionRes: SinglePackageVersionResponse;
  packagePerVersionDownloadsRes: PerVersionDownloadsResponse;
  packageVersionCodeRes: CodeFilesResponse;
  weeklyDownloadsRes: DownloadsPointResponse;
  fileHash: string;
  setFileHash: Dispatch<SetStateAction<string>>;
  packageVersionFileCodeRes: FileCodeResponse;
  repositoryRes: RepositoryResponse;
  repositoryPullsRes: RepositoryPullsResponse;
  tabCounts: any;
};
