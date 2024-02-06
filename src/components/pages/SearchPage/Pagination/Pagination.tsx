import ReactPaginate from 'react-paginate';
import { css } from '@emotion/css';
import { useTheme } from '@emotion/react';

export default function Pagination({
  page,
  pageCount,
  handlePageChange,
}: {
  page: number;
  pageCount: number;
  handlePageChange: (page: number) => void;
}) {
  const theme = useTheme();
  const handlePageClick = (event: { selected: number }) => {
    handlePageChange(event.selected + 1);
  };

  const pageItemStyles = {
    display: 'flex',
    color: theme.colors.typography.paginationItem,
  };
  const activeStyles = {
    fontWeight: 700,
    color: theme.colors.typography.secondary,
  };

  const pageLinkStyles = {
    padding: '8px 12px',
    borderRadius: '4px',
    border: `1px solid ${theme.colors.border.paginationItem}`,
    cursor: 'pointer',
    backgroundColor: theme.colors.background.paginationItem,
    '&:hover': {
      transition: '0.2s linear',
      backgroundColor: theme.colors.background.paginationItemHover,
    },
  };

  const breakLinkStyles = {
    padding: '8px 12px',
    color: theme.colors.typography.paginationItem,
  };

  return (
    <ReactPaginate
      forcePage={page - 1}
      previousLabel="«"
      nextLabel="»"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      pageClassName={css(pageItemStyles)}
      pageLinkClassName={css(pageLinkStyles)}
      previousClassName={css(pageItemStyles)}
      previousLinkClassName={css(pageLinkStyles)}
      nextClassName={css(pageItemStyles)}
      nextLinkClassName={css(pageLinkStyles)}
      breakLabel="..."
      breakClassName={css(pageItemStyles)}
      breakLinkClassName={css(breakLinkStyles)}
      containerClassName={css({
        padding: 0,
        margin: 0,
        listStyle: 'none',
        display: 'flex',
        gap: '8px',
      })}
      activeClassName={css(activeStyles)}
      renderOnZeroPageCount={null}
    />
  );
}
