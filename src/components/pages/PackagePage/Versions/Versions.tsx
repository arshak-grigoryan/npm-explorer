import FetchLayout from '../../../common/FetchLayout/FetchLayout';
import useGetPackagePerVersionDownloads, {
} from '../../../../api/hooks/useGetPackagePerVersionDownloads';
import useGetSinglePackage from '../../../../api/hooks/useGetSinglePackage';
import VersionsLayout from './VersionsLayout';

export default function Versions() {
  const {
    isStartedFetch,
    isFetching,
    error,
    data: downloadsData,
  } = useGetPackagePerVersionDownloads();
  const {
    isStartedFetch: packageIsStartedFetch,
    isFetching: packageIsFetching,
    error: packageError,
    data: packageData,
  } = useGetSinglePackage();

  return (
    <FetchLayout
      state={{
        isStartedFetch: isStartedFetch || packageIsStartedFetch,
        isFetching: isFetching || packageIsFetching,
        error: error || packageError,
        data: { downloadsData, packageData },
      }}
      slots={{
        DataComp: VersionsLayout,
      }}
    />
  );
}
