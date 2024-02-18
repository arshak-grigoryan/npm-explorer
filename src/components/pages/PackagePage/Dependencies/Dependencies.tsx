import { useContext } from 'react';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import { PackagePageContext } from '../PackagePageProvider/PackagePageProvider';
import DependenciesList from './DependenciesList';

export default function Dependencies() {
  const { singlePackageVersionRes } = useContext(PackagePageContext);

  return (
    <FetchLayout
      res={singlePackageVersionRes}
      slots={{
        Content: DependenciesList,
      }}
    />
  );
}
