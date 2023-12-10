import services from '../../utils/services';

export const addPostLike = async (postID) => {
  const DTO = {
    postID,
  };

  return await services.post('/posts/like', DTO);
};
