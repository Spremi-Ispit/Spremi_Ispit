import services from '../../utils/services';

export const deletePost = async (postID) => {
  return await services.delete(`/posts/postId/${postID}`);
};
