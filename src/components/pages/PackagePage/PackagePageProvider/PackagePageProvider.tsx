import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { npmjs, npmApi } from 'src/api/configs';
import useGetRepository from 'src/api/hooks/github/useGetRepository';
import useGetRepositoryPulls from 'src/api/hooks/github/useGetRepositoryPulls';
import useGetCodeFiles from 'src/api/hooks/code/useGetCodeFiles';
import useGetFileCode from 'src/api/hooks/code/useGetFileCode';
import useGetPackageDownloads from 'src/api/hooks/downloads/useGetPackageDownloads';
import useGetPackagePerVersionDownloads from 'src/api/hooks/downloads/useGetPackagePerVersionDownloads';
import useGetSinglePackage, { SinglePackage } from 'src/api/hooks/packages/useGetSinglePackage';
import useGetSinglePackageVersion, {
  SinglePackageversion,
} from 'src/api/hooks/packages/useGetSinglePackageVersion';
import useUrlParams from 'src/hooks/useUrlParams';
import { TabsEnum } from '../Tabs/types';
import { PackagePageContextType } from './types';
import { downloadsPastDateOptions, rangeOptions } from './config';

export const PackagePageContext = createContext<PackagePageContextType>(null as any);

export function usePackageContext() {
  return useContext(PackagePageContext);
}
export function PackagePageContextProvider({ children }: { children: ReactNode }) {
  const { name, version } = useUrlParams();
  const [fileHash, setFileHash] = useState('');

  const singlePackagesRes = useGetSinglePackage();
  const singlePackageVersionRes = useGetSinglePackageVersion();
  const packagePerVersionDownloadsRes = useGetPackagePerVersionDownloads();

  const packageVersionCodeFilesUrl = useMemo(() => {
    const singlePackagesResData = singlePackagesRes.data as SinglePackage['data'] | null;
    let url = '';
    if (name && singlePackagesResData) {
      url = npmjs.getpPackageVersionCodeFilesUrl(
        name,
        version ?? singlePackagesResData['dist-tags'].latest,
      );
    }

    return url;
  }, [name, version, singlePackagesRes.data]);

  const packageVersionCodeRes = useGetCodeFiles(packageVersionCodeFilesUrl);

  const packageVersionFileCodeUrl =
    name && fileHash ? npmjs.getPackageVersionFileCodeUrl(name, fileHash) : '';

  const packageVersionFileCodeRes = useGetFileCode(packageVersionFileCodeUrl);

  const weeklyDownloadsUrl = name ? `${npmApi.allPackagesLastWeekDownloadsUrl}/${name}` : '';
  const weeklyDownloadsRes = useGetPackageDownloads(weeklyDownloadsUrl);

  const singlePackagesResData = singlePackagesRes.data as SinglePackage['data'] | null;
  const repoOwnerName = singlePackagesResData
    ? singlePackagesResData.repository.url
        .replace('git+https://github.com/', '')
        .replace('.git', '')
        .split('/')
    : [];

  const repositoryRes = useGetRepository(repoOwnerName[0], repoOwnerName[1]);

  const repositoryPullsRes = useGetRepositoryPulls(repoOwnerName[0], repoOwnerName[1]);

  // TODO::change name
  const tabCounts = useMemo(() => {
    const counts = { [TabsEnum.dependencies]: 0, [TabsEnum.versions]: 0 };

    const singlePackageVersionResData = singlePackageVersionRes.data as
      | SinglePackageversion['data']
      | null;
    if (singlePackageVersionResData?.dependencies) {
      counts[TabsEnum.dependencies] = Object.keys(singlePackageVersionResData.dependencies).length;
    }

    const singlePackagesResData = singlePackagesRes.data as SinglePackage['data'] | null;

    if (singlePackagesResData?.versions) {
      counts[TabsEnum.versions] = Object.keys(singlePackagesResData.versions).length;
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
