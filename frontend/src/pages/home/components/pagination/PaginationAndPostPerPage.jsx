import React from 'react';
import PostsPerPage from './components/PostsPerPage';
import Pagination from './components/Pagination';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectPaginationTotalNumberOfPosts } from '../../../../redux/home/selectors';

export const PaginationAndPostPerPageDiv = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
`;

export const PaginationAndPostPerPage = () => {
  const totalNumberOfPosts = useSelector(selectPaginationTotalNumberOfPosts);

  if (!totalNumberOfPosts) {
    return null;
  }

  return (
    <PaginationAndPostPerPageDiv>
      <Pagination />
      <PostsPerPage />
    </PaginationAndPostPerPageDiv>
  );
};

export default PaginationAndPostPerPage;
