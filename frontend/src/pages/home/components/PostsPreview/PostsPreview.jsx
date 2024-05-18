import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Error from '../../../../components/dialogs/Error';
import Loader from '../../../../components/Loader';
import { useUrlManager } from '../../../../utils/managers/UrlManager';
import { useApiActions } from '../../../../api/useApiActions';
import PostPreview from '../../../../components/PostPreview/PostPreview';
import MorePosts from './components/MorePosts';

const StyledPaper = styled(Paper)`
  padding: 10px;
  padding-right: 15px;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border: 0.5px solid #c9cace;
`;

const PostsPreviewDiv = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PostsPreview = () => {
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
    urlCommentedPosts,
  } = urlManager.getParams();
  const { loadPostsForHomepageFilters } = useApiActions();
  const { loading, response, error, action } = loadPostsForHomepageFilters;
  const [morePosts, setMorePosts] = useState(false);
  const morePostsref = useRef();
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  useEffect(() => {
    if (response) {
      setMorePosts(false);
      if (morePosts) {
        setPosts((prev) => [...prev, ...response]);
      } else {
        setPosts(response);
      }
      window.scrollTo(0, scrollPosition);
    }
  }, [response]);

  useEffect(() => {
    if (urlOrder) {
      const lastPost = undefined;
      action(
        urlSearch,
        urlOrder,
        urlYearOfStudy,
        urlDepartment,
        urlExaminationPeriod,
        urlSubject,
        urlType,
        urlYearOfExam,
        urlCommentedPosts,
        lastPost
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
    urlCommentedPosts,
  ]);

  useEffect(() => {
    if (morePosts) {
      const lastPost = morePosts ? posts[posts.length - 1] : undefined;

      action(
        urlSearch,
        urlOrder,
        urlYearOfStudy,
        urlDepartment,
        urlExaminationPeriod,
        urlSubject,
        urlType,
        urlYearOfExam,
        urlCommentedPosts,
        lastPost.id
      );
    }
  }, [morePosts]);

  if (error) {
    return <Error error={error} />;
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
    <>
      <PostsPreviewDiv>
        {posts.map((post, index) => {
          return <PostPreview key={index} data={post} />;
        })}
      </PostsPreviewDiv>
      <MorePosts
        onClick={() => {
          setScrollPosition(window.pageYOffset);
          setMorePosts(true);
        }}
        ref={morePostsref}
      />
    </>
  );
};

export default PostsPreview;
