import FetchLayout from '../../../common/FetchLayout/FetchLayout';
import useGetPackagePerVersionDownloads from '../../../../api/hooks/downloads/useGetPackagePerVersionDownloads';
import useGetSinglePackage from '../../../../api/hooks/packages/useGetSinglePackage';
import VersionsLayout from './VersionsLayout';

export default function Versions() {
  const res1 = useGetPackagePerVersionDownloads();
  const res2 = useGetSinglePackage();

  return (
    <FetchLayout
      state={{
        isFetching: res1.isFetching || res2.isFetching,
        isFetched: res1.isFetched || res2.isFetched,
        error: res1.error || res2.error,
        data: { downloadsData: res1.data, packageData: res2.data },
      }}
      slots={{
        Content: VersionsLayout,
      }}
    />
  );
}
