import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext, useState } from 'react';
import { SearchContext } from '../../context/Search/context';
import { Pagination as MuiPagination } from '@mui/material';
import { perPage } from '../../api/configs';

export default function Pagination() {
  const { data, onPageChange } = useContext(SearchContext);
  const [page, setPage] = useState(1);

  const pageData = data.find((item) => item.page === page);
  return (
    pageData &&
    Boolean(pageData?.response.objects.length) && (
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
        <Typography>{pageData.response.total} packages found</Typography>
        <MuiPagination
          count={Math.ceil(pageData.response.total / perPage)}
          page={page}
          onChange={(_, page) => {
            setPage(page);
            onPageChange(page);
          }}
        />
      </Box>
    )
  );
}
