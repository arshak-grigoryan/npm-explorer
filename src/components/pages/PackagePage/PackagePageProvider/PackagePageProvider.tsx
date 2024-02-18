import { Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { npmjs, npmApi } from 'src/api/configs';
import useGetCodeFiles, { CodeFilesResponse } from 'src/api/hooks/code/useGetCodeFiles';
import useGetFileCode, { FileCodeResponse } from 'src/api/hooks/code/useGetFileCode';
import useGetPackageDownloads, {
  DownloadsPointResponse,
} from 'src/api/hooks/downloads/useGetPackageDownloads';
import useGetPackagePerVersionDownloads, {
  PerVersionDownloadsResponse,
} from 'src/api/hooks/downloads/useGetPackagePerVersionDownloads';
import useGetSinglePackage, {
  SinglePackageResponse,
} from 'src/api/hooks/packages/useGetSinglePackage';
import useGetSinglePackageVersion, {
  SinglePackageVersionResponse,
} from 'src/api/hooks/packages/useGetSinglePackageVersion';

type PackagePageContextType = {
  singlePackagesRes: SinglePackageResponse;
  singlePackageVersionRes: SinglePackageVersionResponse;
  packagePerVersionDownloadsRes: PerVersionDownloadsResponse;
  packageVersionCodeRes: CodeFilesResponse;
  weeklyDownloadsRes: DownloadsPointResponse;
  fileHash: string;
  setFileHash: Dispatch<SetStateAction<string>>;
  packageVersionFileCodeRes: FileCodeResponse;
};

export const PackagePageContext = createContext<PackagePageContextType>(null as any);

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
      }}
    >
      {children}
    </PackagePageContext.Provider>
  );
}
