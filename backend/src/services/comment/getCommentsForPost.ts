// @ts-nocheck
import { Comment } from '../../entities/Comment';
import { checkIfLogged } from '../../utils/authManager';
import response from '../../utils/response';
import { mapCommentToDTO } from './utils/mapCommentToDTO';

export const getCommentsForPost = async (req) => {
  const { postId } = req.params;

  const loggedRes = checkIfLogged(req);
  let userId = null;
  if (loggedRes.status) {
    userId = loggedRes.userId;
  }

  const comments = await Comment.find({
    relations: [
      'reportedBy',
      'postedBy',
      'files',
      'likedBy',
      'dislikedBy',
      'post'
    ],
    select: {
      post: {
        id: true
      }
    },
    where: {
      post: { id: postId }
    }
  });

  let commentsToReturn = [];

  comments.forEach((comment) => {
    commentsToReturn.push(mapCommentToDTO(comment, userId));
  });

  if (commentsToReturn.length > 0) {
    return response.OK(commentsToReturn);
  } else {
    return response.OK([]);
  }
};
