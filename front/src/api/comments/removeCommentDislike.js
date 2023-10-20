import services from '../../utils/services';

export const removeCommentDislike = async (commentID) => {
  return await services.delete('/comments/dislike', {
    commentID,
  });
};
