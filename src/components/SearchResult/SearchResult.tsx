import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { perPage } from '../../api/configs';
import SortOptions from '../SortOptions/SortOptions';
import ListPackage from '../ListPackage/ListPackage';
import useGetPackages from '../../hooks/useGetPackages';
import { useSearchParams } from 'react-router-dom';

export default function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isFetching, isFetched, error } = useGetPackages();
  const [page, setPage] = useState(Number(searchParams.get('from') || perPage) / perPage || 1);

  const searchString = searchParams.get('text') || '';
  const showPagination = data && data.total > perPage;

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
          sx={{ backgroundColor: '#f9f9f9' }}
          borderTop="1px solid rgba(0,0,0,.1)"
          borderBottom="1px solid rgba(0,0,0,.1)"
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
              onChange={(_, page) => {
                setPage(page);
                const from = page * perPage - perPage;
                setSearchParams((params) => {
                  params.set('from', String(from));
                  return params;
                });
              }}
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
                  <ListPackage key={obj.package.name} obj={obj} searchString={searchString} />
                ))}
              </Box>
              {showPagination && (
                <Box py={2}>
                  <Pagination
                    count={Math.ceil(data.total / perPage)}
                    page={page}
                    onChange={(_, page) => {
                      setPage(page);
                      const from = page * perPage - perPage;
                      setSearchParams((params) => {
                        params.set('from', String(from));
                        return params;
                      });
                    }}
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
