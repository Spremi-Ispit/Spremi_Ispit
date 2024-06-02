import services from '../../services';

export const removePostLike = async (postID) => {
  return await services.delete('/posts/like', {
    postID,
  });
};
