import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectPostLoading } from '../../../redux/viewPost/selectors';
import Error from '../../../components/dialogs/Error';
import Loader from '../../../components/Loader';
import { useUrlManager } from '../../../utils/managers/UrlManager';
import PostView from '../../../components/PostView/PostView';
import { useNavigate } from 'react-router-dom';
import { homeRoute } from '../../../router/routes';
import { useAppActions } from '../../../redux/useAppActions';
import { useFetch } from '../../../api/useFetch';
import { loadPost } from '../../../api/actions/posts/loadPost';
import { addPostLike } from '../../../api/actions/posts/addPostLike';
import { removePostLike } from '../../../api/actions/posts/removePostLike';
import { addPostDislike } from '../../../api/actions/posts/addPostDislike';
import { removePostDislike } from '../../../api/actions/posts/removePostDislike';
import { reportPost } from '../../../api/actions/posts/reportPost';
import { deletePost } from '../../../api/actions/posts/deletePost';

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
  const { error, data, fetch } = useFetch(loadPost);
  const { viewPostActions } = useAppActions();
  const { setCommentsLoading } = viewPostActions;

  useEffect(() => {
    if (data) {
      setPost(data);
      setCommentsLoading(true);
    }
  }, [data]);

  useEffect(() => {
    if (urlPostId) {
      fetch(urlPostId);
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
