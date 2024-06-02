import services from '../../services';

export const reportComment = async (commentID) => {
  return await services.post(`/comments/report`, {
    commentID,
  });
};
