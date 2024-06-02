import { formatDate } from '../../../utils/dateFormater';
import services from '../../services';

export const loadPost = async (postId) => {
  const data = await services.get(`/posts/postId/${postId}`);
  return {
    ...data,
    date: formatDate(new Date(data.date)),
  };
};
