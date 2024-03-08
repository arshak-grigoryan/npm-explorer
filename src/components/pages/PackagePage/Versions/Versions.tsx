import { useContext } from 'react';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import { PackagePageContext } from '../PackagePageProvider/PackagePageProvider';
import VersionsContainer from './VersionsContainer';

export default function Versions() {
  const { singlePackagesRes, packagePerVersionDownloadsRes } = useContext(PackagePageContext);

  return (
    <FetchLayout
      res={{
        loading: !(
          singlePackagesRes.loading === false && packagePerVersionDownloadsRes.loading === false
        ),
        error: packagePerVersionDownloadsRes.error || singlePackagesRes.error,
        data: {
          downloadsData: packagePerVersionDownloadsRes.data,
          packageData: singlePackagesRes.data,
        },
      }}
      slots={{
        Content: VersionsContainer,
      }}
    />
  );
}
