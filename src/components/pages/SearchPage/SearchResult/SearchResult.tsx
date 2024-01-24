import useSearchPackages from 'src/api/hooks/packages/useSearchPackages';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import SearchResultLayout from './SearchResultLayout';

export default function SearchResult() {
  const res = useSearchPackages();

  return (
    <FetchLayout
      state={res}
      slots={{
        Content: SearchResultLayout,
      }}
    />
  );
}
