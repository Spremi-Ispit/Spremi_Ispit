import services from '../../utils/services';

export const removeCommentLike = async (commentID) => {
  return await services.delete('/comments/like', {
    commentID,
  });
};
