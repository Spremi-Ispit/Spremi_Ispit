import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledPagination } from './styles';
import { setCurrentPage } from '../../../../redux/slices';
import { loadPostsForHomepageFilters } from '../../../../reduxThunk/actions';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.home.currentPage);
  const totalNumberOfPages = useSelector(
    (state) => state.home.totalNumberOfPages
  );

  const handleCurrentPageNumberChange = (event, paginationCurrentPage) => {
    dispatch(setCurrentPage(paginationCurrentPage));
    dispatch(loadPostsForHomepageFilters());
    window.scrollTo(0, 0);
  };

  return totalNumberOfPages ? (
    <StyledPagination
      onChange={handleCurrentPageNumberChange}
      count={totalNumberOfPages}
      page={currentPage}
    />
  ) : null;
};

export default Pagination;
