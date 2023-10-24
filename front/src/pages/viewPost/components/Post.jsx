import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  selectNextPost,
  selectPostLoading,
  selectPrevPost,
} from '../../../redux/viewPost/selectors';
import ErrorDialog from '../../../components/dialogs/ErrorDialog';
import Loader from '../../../components/Loader';
import PostView, { postViewType } from '../../../components/postView/PostView';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../utils/managers/UrlManager';
import { useAppActions } from '../../../redux/useAppActions';
import models from '../../../models';
import { useApiActions } from '../../../api/useApiActions';

const PostDiv = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
`;

export const Post = () => {
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const urlManager = useUrlManager();
  const postLoading = useSelector(selectPostLoading);
  const { viewPostActions } = useAppActions();
  const { setPostLoading, setNextPost, setPrevPost } = viewPostActions;

  const { loadUserPosts, loadPostsForHomepageFilters, loadPost } =
    useApiActions();
  const {
    loaded: loadedLoadUserPosts,
    error: errorLoadUserPosts,
    setError: setErrorLoadUserPosts,
    response: responseLoadUserPosts,
    action: actionLoadUserPosts,
  } = loadUserPosts;

  const {
    loaded: loadedLoadPostsForHomepageFilters,
    error: errorLoadPostsForHomepageFilters,
    setError: setErrorLoadPostsForHomepageFilters,
    response: responseLoadPostsForHomepageFilters,
    action: actionLoadPostsForHomepageFilters,
  } = loadPostsForHomepageFilters;

  const {
    loaded: loadedLoadPost,
    error: errorLoadPost,
    setError: setErrorLoadPost,
    response: responseLoadPost,
    action: actionLoadPost,
  } = loadPost;

  const nextPost = useSelector(selectNextPost);
  const prevPost = useSelector(selectPrevPost);
  const {
    urlSearch,
    urlOrder,
    urlYearOfStudy,
    urlDepartment,
    urlExaminationPeriod,
    urlSubject,
    urlType,
    urlYearOfExam,
    urlPostId,
    urlUsername,
  } = urlManager.getParams();

  useEffect(() => {
    if (nextPost) {
      const currentPostIndex = posts.findIndex(
        (filteredPost) => filteredPost.id === post.id
      );

      let nextPostIndex = currentPostIndex + 1;
      if (nextPostIndex === posts.length) {
        nextPostIndex = 0;
      }
      urlManager.updateUrlParam(
        allowedUrlParams.postId,
        posts[nextPostIndex].id
      );
      setNextPost(false);
    }
  }, [nextPost]);

  useEffect(() => {
    if (urlPostId) {
      setPostLoading(true);
    }
  }, [urlPostId]);

  useEffect(() => {
    if (prevPost) {
      const currentPostIndex = posts.findIndex(
        (filteredPost) => filteredPost.id === post.id
      );

      let prevPostIndex = currentPostIndex - 1;
      if (prevPostIndex === -1) {
        prevPostIndex = posts.length - 1;
      }
      urlManager.updateUrlParam(
        allowedUrlParams.postId,
        posts[prevPostIndex].id
      );
      setPrevPost(false);
    }
  }, [prevPost]);

  useEffect(() => {
    if (loadedLoadUserPosts) {
      setPostLoading(false);
      setPosts(responseLoadUserPosts);
    }
  }, [loadedLoadUserPosts]);

  useEffect(() => {
    if (loadedLoadPostsForHomepageFilters) {
      setPostLoading(false);
      const { posts } = responseLoadPostsForHomepageFilters;
      setPosts(posts);
    }
  }, [loadedLoadPostsForHomepageFilters]);

  useEffect(() => {
    if (loadedLoadPost) {
      setPostLoading(false);
      setPost(responseLoadPost);
    }
  }, [loadedLoadPost]);

  useEffect(() => {
    if (postLoading && urlPostId) {
      if (urlUsername) {
        actionLoadUserPosts(urlUsername);
        return undefined;
      }

      if (urlOrder) {
        actionLoadPostsForHomepageFilters(
          urlSearch,
          urlOrder,
          urlYearOfStudy,
          urlDepartment,
          urlExaminationPeriod,
          urlSubject,
          urlType,
          urlYearOfExam,
          undefined,
          undefined
        );
        return undefined;
      }

      actionLoadPost(urlPostId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postLoading]);

  useEffect(() => {
    if (posts.length) {
      const selectedPost = posts.find(
        (filteredPost) => filteredPost.id === Number(urlPostId)
      );
      setPost(selectedPost);
    }
  }, [posts]);

  if (errorLoadPostsForHomepageFilters) {
    return (
      <ErrorDialog
        error={errorLoadPostsForHomepageFilters}
        setError={setErrorLoadPostsForHomepageFilters}
      />
    );
  }

  if (errorLoadUserPosts) {
    return (
      <ErrorDialog
        error={errorLoadUserPosts}
        setError={setErrorLoadUserPosts}
      />
    );
  }

  if (errorLoadPost) {
    return <ErrorDialog error={errorLoadPost} setError={setErrorLoadPost} />;
  }

  if (postLoading) {
    return <Loader />;
  }

  if (post) {
    return (
      <PostDiv>
        <PostView
          data={models.post(post)}
          enableDelete
          enableReport
          enableFiles
          type={postViewType.post}
        />
      </PostDiv>
    );
  }

  return null;
};

export default Post;
