import useUrlSearchParams from 'src/hooks/useUrlSearchParams';
import PackageListItem from './PackageListItem';
import { PackageListProps } from './types';

export default function PackageList({ data }: PackageListProps) {
  const { searchText } = useUrlSearchParams();

  return (
    <div>
      {data.map((obj) => (
        <PackageListItem key={obj.package.name} obj={obj} searchString={searchText} />
      ))}
    </div>
  );
}
