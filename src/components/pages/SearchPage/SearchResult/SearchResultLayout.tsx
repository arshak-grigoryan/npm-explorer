import { useSearchParams } from 'react-router-dom';
import { SearchPackage } from 'src/api/hooks/packages/useSearchPackages';
import { PAGE, PER_PAGE_PACKAGES_COUNT } from 'src/api/configs';
import { text } from 'src/configs/text';
import useUrlSearchParams from 'src/hooks/useUrlSearchParams';
import SortOptions from '../SortOptions/SortOptions';
import Pagination from '../Pagination/Pagination';
import PackageList from '../PackageList/PackageList';
import * as SC from './styles';

export default function SearchResultLayout({ data }: SearchPackage) {
  const [, setSearchParams] = useSearchParams();
  const { page } = useUrlSearchParams();
  const pageCount = Math.ceil(data.total / PER_PAGE_PACKAGES_COUNT);
  const showPagination = data && data.total > PER_PAGE_PACKAGES_COUNT;

  function handlePageChange(page: number) {
    setSearchParams((params) => {
      params.set(PAGE, String(page));
      return params;
    });
  }

  return (
    <div>
      <SC.PackagesCountContainer>
        <SC.PackagesCountNestedContainer>
          <SC.PackagesCount>{text.countPackagesFound(data.total)}</SC.PackagesCount>
          {showPagination && (
            <Pagination page={page} pageCount={pageCount} handlePageChange={handlePageChange} />
          )}
        </SC.PackagesCountNestedContainer>
      </SC.PackagesCountContainer>
      {Boolean(data.objects.length) && (
        <SC.ContentContainer>
          <SC.SortOptionsContainer>
            <SortOptions />
          </SC.SortOptionsContainer>
          <SC.PackageListContainer>
            <PackageList data={data.objects} />
            {showPagination && (
              <Pagination page={page} pageCount={pageCount} handlePageChange={handlePageChange} />
            )}
          </SC.PackageListContainer>
        </SC.ContentContainer>
      )}
    </div>
  );
}
