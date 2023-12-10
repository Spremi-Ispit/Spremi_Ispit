// @ts-nocheck
import { commentLikeDislikeStatus } from '../../../utils/enums';

export function mapCommentToDTO(comment, userID) {
  let likedStatus = commentLikeDislikeStatus.none;
  if (userID) {
    comment.likedBy.forEach((likedBy) => {
      if (likedBy.id === userID) {
        likedStatus = commentLikeDislikeStatus.liked;
      }
    });

    comment.dislikedBy.forEach((dislikedBy) => {
      if (dislikedBy.id === userID) {
        likedStatus = commentLikeDislikeStatus.disliked;
      }
    });
  }

  return {
    id: comment.id,
    text: comment.text,
    date: comment.date,
    reportedBy: comment.reportedBy,
    postedBy: comment.postedBy.username,
    files: comment.files,
    likeStatus: likedStatus,
    owner: userID && comment.postedBy.id == userID,
    likes: comment.likedBy.length,
    dislikes: comment.dislikedBy.length,
    postId: comment.post.id
  };
}
