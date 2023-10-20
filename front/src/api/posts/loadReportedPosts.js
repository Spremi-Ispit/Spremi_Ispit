import { formatDate } from '../../utils/dateFormater';
import services from '../../utils/services';

export const loadReportedPosts = async () => {
  const data = await services.get(`/posts/reports`);
  const posts = data.map((post) => ({
    ...post,
    date: formatDate(new Date(post.date)),
  }));
  return posts;
};
