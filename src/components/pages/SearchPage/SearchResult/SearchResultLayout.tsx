import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSearchParams } from 'react-router-dom';
import { SearchPackage } from 'src/api/hooks/packages/useSearchPackages';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { PAGE, PER_PAGE_PACKAGES_COUNT } from 'src/api/configs';
import colors from 'src/styles/colors';
import { maxWidth } from 'src/styles/styles';
import { text } from 'src/configs/configs';
import SortOptions from '../SortOptions/SortOptions';
import Pagination from '../Pagination/Pagination';
import PackageList from '../PackageList/PackageList';

export default function SearchResultLayout({ data }: SearchPackage) {
  const [, setSearchParams] = useSearchParams();
  const page = Number(useGetSearchParams(PAGE, 1));
  const pageCount = Math.ceil(data.total / PER_PAGE_PACKAGES_COUNT);
  const showPagination = data && data.total > PER_PAGE_PACKAGES_COUNT;

  function handlePageChange(page: number) {
    setSearchParams((params) => {
      params.set(PAGE, String(page));
      return params;
    });
  }

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: colors.c14,
          borderTop: `1px solid ${colors.c1}`,
          borderBottom: `1px solid ${colors.c1}`,
        }}
      >
        <Box
          sx={{
            maxWidth: maxWidth,
            margin: 'auto',
            padding: '16px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: '1.125rem' }}>
            {text.countPackagesFound(data.total)}
          </Typography>
          {showPagination && (
            <Pagination page={page} pageCount={pageCount} handlePageChange={handlePageChange} />
          )}
        </Box>
      </Box>
      {Boolean(data.objects.length) && (
        <Box
          sx={{
            maxWidth: maxWidth,
            margin: 'auto',
            display: 'flex',
            padding: '16px',
          }}
        >
          <Box sx={{ width: 250 }}>
            <SortOptions />
          </Box>
          <Box
            sx={{
              width: 'calc(100% - 250px)',
              padding: '16px',
            }}
          >
            <PackageList data={data.objects} />
            {showPagination && (
              <Pagination page={page} pageCount={pageCount} handlePageChange={handlePageChange} />
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}
