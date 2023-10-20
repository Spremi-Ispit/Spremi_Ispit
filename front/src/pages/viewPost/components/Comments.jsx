import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Loader from '../../../components/loader';
import PostView, { postViewType } from '../../../components/postView/PostView';
import ErrorDialog from '../../../components/dialogs/ErrorDialog';
import {
  selectCommentsLoading,
  selectPostLoading,
} from '../../../redux/viewPost/selectors';
import { useUrlManager } from '../../../utils/managers/UrlManager';
import { useAppActions } from '../../../redux/useAppActions';
import models from '../../../models';
import { useApiActions } from '../../../api/useApiActions';

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

  const { loadComments } = useApiActions();
  const { loaded, error, setError, response, action } = loadComments;

  useEffect(() => {
    if (postLoading) {
      setCommentsLoading(true);
    }
  }, [dispatch, postLoading]);

  useEffect(() => {
    if (loaded) {
      setCommentsLoading(false);
      setComments(response);
    }
  }, [loaded]);

  useEffect(() => {
    if (commentsLoading) {
      action(urlPostId);
    }
  }, [commentsLoading]);

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (!loaded) {
    return <Loader />;
  }

  if (comments.length > 0) {
    return (
      <>
        <h1>Komentari</h1>
        {comments.map((comment) => {
          const commentModel = models.comment(comment);
          return (
            <PostViewDiv key={JSON.stringify(commentModel)}>
              <PostView
                data={commentModel}
                enableDelete
                enableReport
                enableFiles
                type={postViewType.comment}
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
