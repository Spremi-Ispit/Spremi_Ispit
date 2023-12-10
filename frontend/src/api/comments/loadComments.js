import { formatDate } from '../../utils/dateFormater';
import services from '../../utils/services';

export const loadComments = async (postId) => {
  const rawComments = await services.get(`/comments/post/${postId}`);
  const comments = rawComments.map((rawComment) => ({
    ...rawComment,
    date: formatDate(new Date(rawComment.date)),
  }));
  return comments;
};
