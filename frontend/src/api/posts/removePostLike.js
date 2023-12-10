import services from '../../utils/services';

export const removePostLike = async (postID) => {
  return await services.delete('/posts/like', {
    postID,
  });
};
