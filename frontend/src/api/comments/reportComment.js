import services from '../../utils/services';

export const reportComment = async (commentID) => {
  return await services.post(`/comments/report`, {
    commentID,
  });
};
