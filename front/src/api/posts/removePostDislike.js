import services from '../../utils/services';

export const removePostDislike = async (postID) => {
  return await services.delete('/posts/dislike', {
    postID,
  });
};
