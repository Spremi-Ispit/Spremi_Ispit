import React from 'react';
import { postViewType } from '../../components/postView2/PostView';
import { usePostViewContext } from '../../components/postView2/PostViewContext';
import { useApiActions } from '../../api/useApiActions';

const useActions = () => {
  const { type } = usePostViewContext();
  const {
    addPostLike,
    removePostLike,
    addPostDislike,
    removePostDislike,
    reportPost,
    deletePost,
  } = useApiActions();

  const {
    addCommentLike,
    addCommentDislike,
    removeCommentLike,
    removeCommentDislike,
    reportComment,
    deleteComment,
  } = useApiActions();

  if (type === postViewType.post)
    return {
      addPostDislike: addPostDislike,
      addPostLike: addPostLike,
      removePostDislike: removePostDislike,
      removePostLike: removePostLike,
      reportPost: reportPost,
      deletePost: deletePost,
    };

  return {
    addPostDislike: addCommentDislike,
    addPostLike: addCommentLike,
    removePostDislike: removeCommentDislike,
    removePostLike: removeCommentLike,
    reportPost: reportComment,
    deletePost: deleteComment,
  };
};

export default useActions;
