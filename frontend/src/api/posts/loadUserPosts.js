import { formatDate } from '../../utils/dateFormater';
import services from '../../utils/services';

export const loadUserPosts = async (username) => {
  const data = await services.get(`/posts/user?username=${username}`);
  const posts = data.map((post) => ({
    ...post,
    date: formatDate(new Date(post.date)),
  }));
  return posts;
};
