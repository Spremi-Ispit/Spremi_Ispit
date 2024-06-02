import services from '../../services';

export const removeCommentLike = async (commentID) => {
  return await services.delete('/comments/like', {
    commentID,
  });
};
