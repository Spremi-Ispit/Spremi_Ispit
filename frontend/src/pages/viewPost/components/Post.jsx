import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectPostLoading } from '../../../redux/viewPost/selectors';
import Error from '../../../components/dialogs/Error';
import Loader from '../../../components/Loader';
import { useUrlManager } from '../../../utils/managers/UrlManager';
import { useApiActions } from '../../../api/useApiActions';
import PostView from '../../../components/PostView/PostView';
import { useNavigate } from 'react-router-dom';
import { homeRoute } from '../../../router/routes';
import { useAppActions } from '../../../redux/useAppActions';

const PostDiv = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
`;

export const Post = () => {
  const [post, setPost] = useState(null);
  const postLoading = useSelector(selectPostLoading);
  const urlManager = useUrlManager();
  const navigate = useNavigate();
  const { urlPostId } = urlManager.getParams();
  const { loadPost } = useApiActions();
  const { error, response, action } = loadPost;
  const {
    addPostLike,
    removePostLike,
    addPostDislike,
    removePostDislike,
    reportPost,
    deletePost,
  } = useApiActions();
  const { viewPostActions } = useAppActions();
  const { setCommentsLoading } = viewPostActions;

  useEffect(() => {
    if (response) {
      setPost(response);
      setCommentsLoading(true);
    }
  }, [response]);

  useEffect(() => {
    if (urlPostId) {
      action(urlPostId);
    }
  }, [urlPostId]);

  if (error) {
    return <Error error={error} />;
  }

  if (postLoading) {
    return <Loader />;
  }

  const onSuccessfulDeletion = () => {
    navigate(homeRoute);
  };

  if (post) {
    return (
      <PostDiv>
        <PostView
          data={post}
          addLike={addPostLike}
          removeLike={removePostLike}
          addDislike={addPostDislike}
          removeDislike={removePostDislike}
          report={reportPost}
          delete={deletePost}
          onSuccessfulDeletion={onSuccessfulDeletion}
        />
      </PostDiv>
    );
  }

  return null;
};

export default Post;
