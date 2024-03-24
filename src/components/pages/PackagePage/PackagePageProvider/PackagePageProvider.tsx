import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { npmjs, npmApi } from 'src/api/configs';
import useGetRepository from 'src/api/hooks/github/useGetRepository';
import useGetRepositoryPulls from 'src/api/hooks/github/useGetRepositoryPulls';
import useGetCodeFiles from 'src/api/hooks/code/useGetCodeFiles';
import useGetFileCode from 'src/api/hooks/code/useGetFileCode';
import useGetPackageDownloads from 'src/api/hooks/downloads/useGetPackageDownloads';
import useGetPackagePerVersionDownloads from 'src/api/hooks/downloads/useGetPackagePerVersionDownloads';
import useGetSinglePackage from 'src/api/hooks/packages/useGetSinglePackage';
import useGetSinglePackageVersion from 'src/api/hooks/packages/useGetSinglePackageVersion';
import { TabsEnum } from '../Tabs/types';
import { PackagePageContextType } from './types';
import { downloadsPastDateOptions, rangeOptions } from './config';

export const PackagePageContext = createContext<PackagePageContextType>(null as any);

export function usePackageContext() {
  return useContext(PackagePageContext);
}
export function PackagePageContextProvider({ children }: { children: ReactNode }) {
  const { name, version } = useParams();
  const [fileHash, setFileHash] = useState('');

  const singlePackagesRes = useGetSinglePackage();
  const singlePackageVersionRes = useGetSinglePackageVersion();
  const packagePerVersionDownloadsRes = useGetPackagePerVersionDownloads();

  const packageVersionCodeFilesUrl = useMemo(() => {
    return name && singlePackagesRes.data
      ? npmjs.getpPackageVersionCodeFilesUrl(
          name,
          version ?? singlePackagesRes.data['dist-tags'].latest,
        )
      : '';
  }, [name, version, singlePackagesRes.data]);

  const packageVersionCodeRes = useGetCodeFiles(packageVersionCodeFilesUrl);

  const packageVersionFileCodeUrl =
    name && fileHash ? npmjs.getPackageVersionFileCodeUrl(name, fileHash) : '';

  const packageVersionFileCodeRes = useGetFileCode(packageVersionFileCodeUrl);

  const weeklyDownloadsUrl = name ? `${npmApi.allPackagesLastWeekDownloadsUrl}/${name}` : '';
  const weeklyDownloadsRes = useGetPackageDownloads(weeklyDownloadsUrl);

  const repoOwnerName = singlePackagesRes.data
    ? singlePackagesRes.data.repository.url
        .replace('git+https://github.com/', '')
        .replace('.git', '')
        .split('/')
    : [];

  const repositoryRes = useGetRepository(repoOwnerName[0], repoOwnerName[1]);

  const repositoryPullsRes = useGetRepositoryPulls(repoOwnerName[0], repoOwnerName[1]);

  const tabCounts = useMemo(() => {
    const counts = { [TabsEnum.dependencies]: 0, [TabsEnum.versions]: 0 };

    if (singlePackageVersionRes.data?.dependencies) {
      counts[TabsEnum.dependencies] = Object.keys(singlePackageVersionRes.data.dependencies).length;
    }

    if (singlePackagesRes.data?.versions) {
      counts[TabsEnum.versions] = Object.keys(singlePackagesRes.data.versions).length;
    }

    return counts;
  }, [singlePackageVersionRes, singlePackagesRes]);

  const [downloadsRange, setDownloadsRange] = useState(rangeOptions[0]);

  const [packageDownloadsStartDate, setPackageDownloadsStartDate] = useState(
    downloadsPastDateOptions[0],
  );

  return (
    <PackagePageContext.Provider
      value={{
        singlePackagesRes,
        singlePackageVersionRes,
        packagePerVersionDownloadsRes,
        packageVersionCodeRes,
        weeklyDownloadsRes,
        fileHash,
        setFileHash,
        packageVersionFileCodeRes,
        repositoryRes,
        repositoryPullsRes,
        tabCounts,
        packageDownloadsStartDate,
        setPackageDownloadsStartDate,
        downloadsRange,
        setDownloadsRange,
      }}
    >
      {children}
    </PackagePageContext.Provider>
  );
}
