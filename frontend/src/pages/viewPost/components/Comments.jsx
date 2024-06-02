import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Loader from '../../../components/Loader';
import PostView from '../../../components/PostView/PostView';
import Error from '../../../components/dialogs/Error';
import {
  selectCommentsLoading,
  selectPostLoading,
} from '../../../redux/viewPost/selectors';
import { useUrlManager } from '../../../utils/managers/UrlManager';
import { useAppActions } from '../../../redux/useAppActions';
import { useFetch } from '../../../api/useFetch';
import { loadComments } from '../../../api/actions/comments/loadComments';
import { addCommentLike } from '../../../api/actions/comments/addCommentLike';
import { removeCommentLike } from '../../../api/actions/comments/removeCommentLike';
import { addCommentDislike } from '../../../api/actions/comments/addCommentDislike';
import { removeCommentDislike } from '../../../api/actions/comments/removeCommentDislike';
import { reportComment } from '../../../api/actions/comments/reportComment';
import { deleteComment } from '../../../api/actions/comments/deleteComment';

const PostViewDiv = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
`;

export const Comments = () => {
  const dispatch = useDispatch();
  const urlManager = useUrlManager();
  const { urlPostId } = urlManager.getParams();
  const [comments, setComments] = useState([]);
  const postLoading = useSelector(selectPostLoading);
  const commentsLoading = useSelector(selectCommentsLoading);
  const { viewPostActions } = useAppActions();
  const { setCommentsLoading } = viewPostActions;
  const { loaded, error, data, fetch } = useFetch(loadComments);

  useEffect(() => {
    if (postLoading) {
      setCommentsLoading(true);
    }
  }, [dispatch, postLoading]);

  useEffect(() => {
    if (loaded) {
      setCommentsLoading(false);
      setComments(data);
    }
  }, [loaded]);

  useEffect(() => {
    if (commentsLoading) {
      fetch(urlPostId);
    }
  }, [commentsLoading]);

  if (error) {
    return <Error error={error} />;
  }

  if (!loaded) {
    return <Loader />;
  }

  const onSuccessfulDeletion = () => {
    setCommentsLoading(true);
  };

  if (comments.length > 0) {
    return (
      <>
        <h1>Komentari</h1>
        {comments.map((comment) => {
          return (
            <PostViewDiv key={JSON.stringify(comment)}>
              <PostView
                data={comment}
                addLike={addCommentLike}
                removeLike={removeCommentLike}
                addDislike={addCommentDislike}
                removeDislike={removeCommentDislike}
                report={reportComment}
                delete={deleteComment}
                onSuccessfulDeletion={onSuccessfulDeletion}
              />
            </PostViewDiv>
          );
        })}
      </>
    );
  }

  return null;
};

export default Comments;
