import services from '../../services';

export const addCommentDislike = async (commentID) => {
  const DTO = {
    commentID,
  };
  return await services.post('/comments/dislike', DTO);
};
