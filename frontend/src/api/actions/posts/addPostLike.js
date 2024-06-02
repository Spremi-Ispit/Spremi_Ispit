import services from '../../services';

export const addPostLike = async (postID) => {
  const DTO = {
    postID,
  };

  return await services.post('/posts/like', DTO);
};
