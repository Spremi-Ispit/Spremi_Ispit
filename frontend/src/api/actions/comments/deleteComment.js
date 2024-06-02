import services from '../../services';

export const deleteComment = async (commentID) => {
  return await services.delete(`/comments/commentId/${commentID}`);
};
