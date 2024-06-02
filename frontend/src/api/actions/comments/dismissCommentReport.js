import services from '../../services';

export const dismissCommentReport = async (commentId) => {
  return await services.delete(`/comments/dismissReport`, {
    commentId,
  });
};
