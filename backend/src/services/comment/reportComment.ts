// @ts-nocheck
import response from '../../utils/response/index';
import { Comment } from '../../entities/Comment';
import { User } from '../../entities/User';

export const reportComment = async (req) => {
  const { commentID, userID } = req.body;

  const alreadyReported = await Comment.findOne({
    relations: ['reportedBy'],
    where: {
      id: commentID,
      reportedBy: { id: userID }
    }
  });

  if (!alreadyReported) {
    const reportedBy = await User.findOne({
      where: { id: userID }
    });

    const comment = await Comment.findOne({
      where: { id: commentID },
      relations: ['reportedBy']
    });

    if (comment && reportedBy) {
      comment.reportedBy.push(reportedBy);
      await comment.save();

      return response.OK(`Comment reported`);
    } else {
      return response.BAD_REQUEST(`User or comment doesnt exist`);
    }
  } else {
    return response.BAD_REQUEST(`Comment already reported`);
  }
};
