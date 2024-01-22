import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { useSearchParams } from 'react-router-dom';
import useSearchPackages, { SearchPackage } from 'src/api/hooks/packages/useSearchPackages';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { PAGE, PER_PAGE_PACKAGES_COUNT, npmRegistry } from 'src/api/configs';
import colors from 'src/styles/colors';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import ListPackage from '../ListPackage/ListPackage';
import SortOptions from '../SortOptions/SortOptions';

function Result({ data }: SearchPackage) {
  const [, setSearchParams] = useSearchParams();

  const page = Number(useGetSearchParams(PAGE, 1));
  const searchString = useGetSearchParams(npmRegistry.searchParams.text, '');
  const showPagination = data && data.total > PER_PAGE_PACKAGES_COUNT;

  function handlePageChange(page: number) {
    setSearchParams((params) => {
      params.set(PAGE, String(page));
      return params;
    });
  }

  function handleKeywordClick(keyword: string) {
    setSearchParams({ [npmRegistry.searchParams.text]: `keywords:${keyword}` });
  }

  return (
    <Box>
      <Box
        sx={{ backgroundColor: colors.c14 }}
        borderTop={`1px solid ${colors.c1}`}
        borderBottom={`1px solid ${colors.c1}`}
        py={2}
        px={4}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography>{data.total} packages found</Typography>
        {showPagination && (
          <Pagination
            count={Math.ceil(data.total / PER_PAGE_PACKAGES_COUNT)}
            page={page}
            onChange={(_, page) => handlePageChange(page)}
          />
        )}
      </Box>
      {Boolean(data.objects.length) && (
        <Stack direction={'row'} gap={4} px={4} py={2}>
          <Box width={250}>
            <SortOptions />
          </Box>
          <Stack width={'calc(100% - 250px)'}>
            <Box>
              {data.objects.map((obj) => (
                <ListPackage
                  key={obj.package.name}
                  obj={obj}
                  searchString={searchString}
                  handleKeywordClick={handleKeywordClick}
                />
              ))}
            </Box>
            {showPagination && (
              <Box py={2}>
                <Pagination
                  count={Math.ceil(data.total / PER_PAGE_PACKAGES_COUNT)}
                  page={page}
                  onChange={(_, page) => handlePageChange(page)}
                />
              </Box>
            )}
          </Stack>
        </Stack>
      )}
    </Box>
  );
}

export default function SearchResult() {
  const res = useSearchPackages();

  return (
    <FetchLayout
      state={res}
      slots={{
        Content: Result,
      }}
    />
  );
}
