// @ts-nocheck
import response from '../../utils/response/index';
import { Comment } from '../../entities/Comment';

export const dismissReport = async (req) => {
  const { commentId } = req.body;
  const reportedComment = await Comment.findOne({
    relations: ['reportedBy'],
    where: {
      id: commentId
    }
  });

  if (reportedComment) {
    reportedComment.reportedBy = [];
    await reportedComment.save();
    return response.OK(`Comment report dismissed`);
  } else {
    return response.BAD_REQUEST(
      `Comment report dismiss faild because comment is not reported`
    );
  }
};
