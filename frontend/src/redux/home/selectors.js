export const selectFiltersVisible = (state) => state.home.filters.visible;
export const selectPaginationCurrentPage = (state) =>
  state.home.pagination.currentPage;
export const selectPaginationPostPerPage = (state) =>
  state.home.pagination.postPerPage;
export const selectPaginationTotalNumberOfPages = (state) =>
  state.home.pagination.totalNumberOfPages;
export const selectPaginationTotalNumberOfPosts = (state) =>
  state.home.pagination.totalNumberOfPosts;
