import MuiPagination from '@mui/material/Pagination';
import { ChangeEvent } from 'react';
import { PaginationItem } from '@mui/material';
import colors from 'src/styles/colors';

export default function Pagination({
  page,
  pageCount,
  handlePageChange,
}: {
  page: number;
  pageCount: number;
  handlePageChange: (page: number) => void;
}) {
  const onPageChange = (_: ChangeEvent<unknown>, page: number) => handlePageChange(page);

  return (
    <MuiPagination
      count={pageCount}
      page={page}
      onChange={onPageChange}
      variant="outlined"
      shape="rounded"
      defaultPage={3}
      siblingCount={page === 1 || page === pageCount ? 0 : 2}
      boundaryCount={1}
      hidePrevButton={page === 1}
      hideNextButton={page === pageCount}
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: () => <>«</>, next: () => <>»</> }}
          {...item}
          sx={{
            backgroundColor: colors.c13,
            border: `1px solid ${colors.c27}`,
            colors: colors.c4,
            '&:hover': {
              backgroundColor: colors.c28,
            },
            '&.Mui-selected': {
              fontWeight: 700,
              backgroundColor: colors.c28,
            },
          }}
        />
      )}
    />
  );
}
