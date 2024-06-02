import { formatDate } from '../../../utils/dateFormater';
import services from '../../services';

export const loadReportedComments = async () => {
  const rawComments = await services.get(`/comments/reports`);
  const comments = rawComments.map((rawComment) => ({
    ...rawComment,
    date: formatDate(new Date(rawComment.date)),
    postedBy: rawComment.postedBy.username,
  }));

  return comments;
};
