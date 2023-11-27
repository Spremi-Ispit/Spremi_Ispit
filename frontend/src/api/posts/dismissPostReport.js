import services from '../../utils/services';

export const dismissPostReport = async (postId) => {
  await services.delete(`/posts/dismissReport/postId/${postId}`);
};
