import React, { useEffect } from 'react';
import styled from 'styled-components';
import MUIPagination from '@mui/material/Pagination';
import { useSearchParams } from 'react-router-dom';
import { useAppActions } from '../../../../../redux/useAppActions';
import { useSelector } from 'react-redux';
import {
  selectPaginationCurrentPage,
  selectPaginationTotalNumberOfPages,
} from '../../../../../redux/home/selectors';
import { screensCSS } from '../../../../../utils/useScreens';

const StyledPagination = styled(MUIPagination)`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-left: 117px;

  @media ${screensCSS.tablet} {
    margin-left: 0px;
  }
`;

export const Pagination = () => {
  const currentPage = useSelector(selectPaginationCurrentPage);
  const totalNumberOfPages = useSelector(selectPaginationTotalNumberOfPages);
  const { homeActions } = useAppActions();
  const { setPaginationCurrentPage } = homeActions;
  const [searchParams] = useSearchParams();

  const handleCurrentPageNumberChange = (event, paginationCurrentPage) => {
    setPaginationCurrentPage(paginationCurrentPage);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setPaginationCurrentPage(1);
    window.scrollTo(0, 0);
  }, [searchParams]);

  if (!totalNumberOfPages) return null;

  return (
    <StyledPagination
      onChange={handleCurrentPageNumberChange}
      count={totalNumberOfPages}
      page={currentPage}
    />
  );
};

export default Pagination;
