import services from '../../services';

export const removePostDislike = async (postID) => {
  return await services.delete('/posts/dislike', {
    postID,
  });
};
