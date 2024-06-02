import services from '../../services';

export const reportPost = (postID) => {
  return services.post(`/posts/report`, {
    postID,
  });
};
