import { npmRegistry } from 'src/api/configs';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import PackageListItem from './PackageListItem';
import { PackageListProps } from './types';

export default function PackageList({ data }: PackageListProps) {
  const searchString = useGetSearchParams(npmRegistry.searchParams.text, '');

  return data.map((obj) => (
    <PackageListItem key={obj.package.name} obj={obj} searchString={searchString} />
  ));
}
