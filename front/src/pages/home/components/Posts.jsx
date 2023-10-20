import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import PostView from '../../../components/postView/PostView';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import ErrorDialog from '../../../components/dialogs/ErrorDialog';
import Loader from '../../../components/loader';
import { useUrlManager } from '../../../utils/managers/UrlManager';
import {
  selectPaginationCurrentPage,
  selectPaginationPostPerPage,
} from '../../../redux/home/selectors';
import { useAppActions } from '../../../redux/useAppActions';
import models from '../../../models';
import { useApiActions } from '../../../api/useApiActions';

const StyledPaper = styled(Paper)`
  padding: 10px;
  padding-right: 15px;
  margin-bottom: 30px;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border: 0.5px solid #c9cace;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PostViewDiv = styled.div`
  width: 100%;
`;

export const Posts = () => {
  const currentPage = useSelector(selectPaginationCurrentPage);
  const postPerPage = useSelector(selectPaginationPostPerPage);
  const [posts, setPosts] = useState([]);
  const urlManager = useUrlManager();
  const {
    urlSearch,
    urlOrder,
    urlYearOfStudy,
    urlDepartment,
    urlExaminationPeriod,
    urlSubject,
    urlType,
    urlYearOfExam,
  } = urlManager.getParams();
  const { loadPostsForHomepageFilters } = useApiActions();
  const { loading, loaded, response, error, setError, action } =
    loadPostsForHomepageFilters;

  const { homeActions } = useAppActions();
  const { setPaginationTotalNumberOfPages, setPaginationTotalNumberOfPosts } =
    homeActions;

  useEffect(() => {
    if (loaded) {
      const { posts, totalNumberOfPages, totalNumberOfPosts } = response;
      setPosts(posts);
      setPaginationTotalNumberOfPages(totalNumberOfPages);
      setPaginationTotalNumberOfPosts(totalNumberOfPosts);
    }
  }, [loaded]);

  useEffect(() => {
    if (urlOrder) {
      action(
        urlSearch,
        urlOrder,
        urlYearOfStudy,
        urlDepartment,
        urlExaminationPeriod,
        urlSubject,
        urlType,
        urlYearOfExam,
        currentPage,
        postPerPage
      );
    }
  }, [
    urlSearch,
    urlOrder,
    urlYearOfStudy,
    urlDepartment,
    urlExaminationPeriod,
    urlSubject,
    urlType,
    urlYearOfExam,
    currentPage,
    postPerPage,
  ]);

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (loading) {
    return <Loader />;
  }

  if (posts.length === 0) {
    return (
      <Fade in={true}>
        <StyledPaper elevation={4}>
          <Typography variant="h5">
            {'Sadržaj još uvek nije kreiran!'}
          </Typography>
        </StyledPaper>
      </Fade>
    );
  }

  return (
    <PostsContainer>
      {posts.map((post, index) => (
        <PostViewDiv key={index}>
          <PostView data={models.post(post)} enableShowPost posts={posts} />
        </PostViewDiv>
      ))}
    </PostsContainer>
  );
};

export default Posts;
