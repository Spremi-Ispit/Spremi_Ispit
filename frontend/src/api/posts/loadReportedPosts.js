import services from '../../utils/services';

export const loadReportedPosts = async () => {
  return await services.get(`/posts/reports`);
};
