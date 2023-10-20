import services from '../../utils/services';

export const addPostDislike = async (postID) => {
  const DTO = {
    postID,
  };

  return await services.post('/posts/dislike', DTO);
};
