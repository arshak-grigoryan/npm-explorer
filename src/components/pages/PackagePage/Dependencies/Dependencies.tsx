import useGetSinglePackageVersion from 'src/api/hooks/packages/useGetSinglePackageVersion';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import DependenciesList from './DependenciesList';

export default function Dependencies() {
  const res = useGetSinglePackageVersion();

  return (
    <FetchLayout
      state={res}
      slots={{
        Content: DependenciesList,
      }}
    />
  );
}
