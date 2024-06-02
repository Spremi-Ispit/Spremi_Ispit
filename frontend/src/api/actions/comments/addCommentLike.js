import services from '../../services';

export const addCommentLike = async (commentID) => {
  const DTO = {
    commentID,
  };

  return await services.post('/comments/like', DTO);
};
