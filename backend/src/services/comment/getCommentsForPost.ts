// @ts-nocheck
import { Comment } from '../../entities/Comment';
import { checkIfLogged } from '../../utils/authManager';
import response from '../../utils/response';
import { mapCommentToDTO } from './utils/mapCommentToDTO';

export const getCommentsForPost = async (req) => {
  const { postId } = req.params;

  const loggedRes = checkIfLogged(req);
  let userID = null;
  if (loggedRes.status) {
    userID = loggedRes.userID;
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
    commentsToReturn.push(mapCommentToDTO(comment, userID));
  });

  if (commentsToReturn.length > 0) {
    return response.OK(commentsToReturn);
  } else {
    return response.OK([]);
  }
};
