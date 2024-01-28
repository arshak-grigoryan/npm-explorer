import ReactPaginate from 'react-paginate';
import './styles.css';

export default function Pagination({
  page,
  pageCount,
  handlePageChange,
}: {
  page: number;
  pageCount: number;
  handlePageChange: (page: number) => void;
}) {
  const handlePageClick = (event: { selected: number }) => {
    console.log(event);
    handlePageChange(event.selected + 1);
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
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
}
