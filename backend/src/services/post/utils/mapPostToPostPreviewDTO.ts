// @ts-nocheck
import { postLikeDislikeStatus } from '../../../utils/enums';

export function mapPostToPostPreviewDTO(post, userID) {
  let likedStatus = postLikeDislikeStatus.none;
  if (userID) {
    const liked = post?.likedBy.find((user) => user.id === userID);
    if (liked) {
      likedStatus = postLikeDislikeStatus.liked;
    }

    const disliked = post?.dislikedBy.find((user) => user.id === userID);
    if (disliked) {
      likedStatus = postLikeDislikeStatus.disliked;
    }
  }

  const postToReturn = {
    id: post.id,
    title: post.title,
    text: post.text,
    date: post.date,
    likes: post.likedBy.length,
    dislikes: post.dislikedBy.length,
    postedBy: post.postedBy.username,
    userId: post.postedBy.id,
    owner: userID && userID === post.postedBy.id,
    files: post.files,
    likeStatus: likedStatus,
    comments: post.comments.length
  };

  return postToReturn;
}
