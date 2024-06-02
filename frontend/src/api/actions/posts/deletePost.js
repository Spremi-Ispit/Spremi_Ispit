import services from '../../services';

export const deletePost = async (postID) => {
  return await services.delete(`/posts/postId/${postID}`);
};
