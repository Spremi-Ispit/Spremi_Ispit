import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';
import Button from '../../../../../components/buttons/Button';
import Error from '../../../../../components/dialogs/Error';
import Loader from '../../../../../components/Loader';
import { useFetch } from '../../../../../api/useFetch';
import { loadPostsForHomepageFilters } from '../../../../../api/actions/posts/loadPostsForHomepageFilters';

const NextButton = styled(Button)`
  text-transform: uppercase;
`;

export const NextPost = () => {
  const [posts, setPosts] = useState([]);
  const urlManager = useUrlManager();
  const {
    urlOrder,
    urlDepartment,
    urlExaminationPeriod,
    urlPostId,
    urlSearch,
    urlSubject,
    urlType,
    urlYearOfExam,
    urlYearOfStudy,
    urlCommentedPosts,
  } = urlManager.getParams();
  const { fetch, error, loading, data } = useFetch(loadPostsForHomepageFilters);

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  useEffect(() => {
    if (urlPostId && urlOrder) {
      fetch(
        urlSearch,
        urlOrder,
        urlYearOfStudy,
        urlDepartment,
        urlExaminationPeriod,
        urlSubject,
        urlType,
        urlYearOfExam,
        urlCommentedPosts,
        urlPostId
      );
    }
  }, [urlPostId]);

  const handleNextPost = () => {
    const nextPost = posts[0];
    urlManager.updateUrlParam(allowedUrlParams.postId, nextPost.id);
  };

  if (
    !urlOrder ||
    posts.length === 0 ||
    posts[posts.length - 1].id === urlPostId
  ) {
    return null;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  return <NextButton onClick={handleNextPost}>sledeća »</NextButton>;
};

export default NextPost;
