import { useSearchParams } from 'react-router-dom';
import { npmRegistry } from 'src/api/configs';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import PackageListItem from './PackageListItem';
import { PackageListProps } from './types';

export default function PackageList({ data }: PackageListProps) {
  const [, setSearchParams] = useSearchParams();

  const searchString = useGetSearchParams(npmRegistry.searchParams.text, '');

  function handleKeywordClick(keyword: string) {
    setSearchParams({ [npmRegistry.searchParams.text]: `keywords:${keyword}` });
  }

  return data.map((obj) => (
    <PackageListItem
      key={obj.package.name}
      obj={obj}
      searchString={searchString}
      handleKeywordClick={handleKeywordClick}
    />
  ));
}
