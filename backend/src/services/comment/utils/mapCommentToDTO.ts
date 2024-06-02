// @ts-nocheck
import { commentLikeDislikeStatus } from '../../../utils/enums';

export function mapCommentToDTO(comment, userId) {
  let likedStatus = commentLikeDislikeStatus.none;
  if (userId) {
    comment.likedBy.forEach((likedBy) => {
      if (likedBy.id === userId) {
        likedStatus = commentLikeDislikeStatus.liked;
      }
    });

    comment.dislikedBy.forEach((dislikedBy) => {
      if (dislikedBy.id === userId) {
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
    owner: userId && comment.postedBy.id == userId,
    likes: comment.likedBy.length,
    dislikes: comment.dislikedBy.length,
    postId: comment.post.id
  };
}
