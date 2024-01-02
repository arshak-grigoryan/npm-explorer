import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { SEARCH_PARAMS, perPage } from '../../api/configs';
import SortOptions from '../SortOptions/SortOptions';
import ListPackage from '../ListPackage/ListPackage';
import useGetPackages from '../../api/hooks/useGetPackages';
import { useSearchParams } from 'react-router-dom';
import useGetSearchParams from '../../hooks/useGetSearchParams';
import colors from '../../styles/colors';

export default function SearchResult() {
  const [_, setSearchParams] = useSearchParams();
  const { data, isFetching, isFetched, error } = useGetPackages();

  const page = Number(useGetSearchParams(SEARCH_PARAMS.page, 1))
  const searchString = useGetSearchParams(SEARCH_PARAMS.text, '');
  const showPagination = data && data.total > perPage;

  function handlePageChange(page: number) {
    setSearchParams((params) => {
      params.set(SEARCH_PARAMS.page, String(page));
      return params;
    });
  }

  if (!isFetched) {
    return null;
  }

  if (isFetching) {
    return <div>Skeleton</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data) {
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
                    handleKeywordClick={(keyword: string) => {
                      setSearchParams((params) => {
                        params.set(SEARCH_PARAMS.text, `keywords:${keyword}`);
                        return params;
                      });
                    }}
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

  return <div>No data</div>;
}
