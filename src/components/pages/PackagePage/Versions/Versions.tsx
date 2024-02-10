import useGetPackagePerVersionDownloads from 'src/api/hooks/downloads/useGetPackagePerVersionDownloads';
import useGetSinglePackage from 'src/api/hooks/packages/useGetSinglePackage';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import VersionsContainer from './VersionsContainer';

export default function Versions() {
  const res1 = useGetPackagePerVersionDownloads();
  const res2 = useGetSinglePackage();

  return (
    <FetchLayout
      res={{
        loading: res1.loading || res2.loading,
        error: res1.error || res2.error,
        data: { downloadsData: res1.data, packageData: res2.data },
      }}
      slots={{
        Content: VersionsContainer,
      }}
    />
  );
}
