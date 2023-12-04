import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext, useState } from 'react';
import { SearchContext } from '../../context/Search/context';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { perPage } from '../../api/configs';
import SortOptions from '../SortOptions/SortOptions';
import ListPackage from '../ListPackage/ListPackage';

export default function SearchResult() {
  const { data, onPageChange, isFetching } = useContext(SearchContext);
  const [page, setPage] = useState(1);

  const showPagination = data && data.total > perPage;

  if (isFetching) {
    return <div>Loading...</div>;
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
                onPageChange(page);
              }}
            />
          )}
        </Box>
        <Stack direction={'row'} gap={4} px={4} py={2}>
          <Box width={250}>
            <SortOptions />
          </Box>
          <Stack width={'calc(100% - 250px)'}>
            <Box>
              {data.objects.map((obj) => (
                <ListPackage key={obj.package.name} obj={obj} />
              ))}
            </Box>
            {showPagination && (
              <Box py={2}>
                <Pagination
                  count={Math.ceil(data.total / perPage)}
                  page={page}
                  onChange={(_, page) => {
                    setPage(page);
                    onPageChange(page);
                  }}
                />
              </Box>
            )}
          </Stack>
        </Stack>
      </Box>
    );
  }
  return null;
}
