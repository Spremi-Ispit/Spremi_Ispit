import services from '../../services';

export const loadReportedPosts = async () => {
  return await services.get(`/posts/reports`);
};
