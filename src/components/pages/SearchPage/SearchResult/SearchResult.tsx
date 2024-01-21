import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { SEARCH_PARAMS, perPage } from '../../../../api/configs';
import SortOptions from '../SortOptions/SortOptions';
import ListPackage from '../ListPackage/ListPackage';
import useSearchPackages, { SearchPackage } from '../../../../api/hooks/packages/useSearchPackages';
import { useSearchParams } from 'react-router-dom';
import useGetSearchParams from '../../../../hooks/useGetSearchParams';
import colors from '../../../../styles/colors';
import FetchLayout from '../../../common/FetchLayout/FetchLayout';

function Result({ data }: SearchPackage) {
  const [, setSearchParams] = useSearchParams();

  const page = Number(useGetSearchParams(SEARCH_PARAMS.page, 1));
  const searchString = useGetSearchParams(SEARCH_PARAMS.text, '');
  const showPagination = data && data.total > perPage;

  function handlePageChange(page: number) {
    setSearchParams((params) => {
      params.set(SEARCH_PARAMS.page, String(page));
      return params;
    });
  }

  function handleKeywordClick(keyword: string) {
    setSearchParams({ [SEARCH_PARAMS.text]: `keywords:${keyword}` });
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
            count={Math.ceil(data.total / perPage)}
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
                  count={Math.ceil(data.total / perPage)}
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
