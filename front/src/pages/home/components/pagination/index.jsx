import React from 'react';
import PostsPerPageContainer from './components/postsPerPage';
import Pagination from './components/pagination';
import { PaginationAndPostCountContainer } from './styles';

const PaginationComponent = () => {
  return (
    <PaginationAndPostCountContainer>
      <Pagination />
      <PostsPerPageContainer />
    </PaginationAndPostCountContainer>
  );
};

export default PaginationComponent;
