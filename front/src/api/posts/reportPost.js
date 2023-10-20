import services from '../../utils/services';

export const reportPost = (postID) => {
  return services.post(`/posts/report`, {
    postID,
  });
};
