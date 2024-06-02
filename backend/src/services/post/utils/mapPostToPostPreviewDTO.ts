// @ts-nocheck
import { postLikeDislikeStatus } from '../../../utils/enums';

export function mapPostToPostPreviewDTO(post, userId) {
  let likedStatus = postLikeDislikeStatus.none;
  if (userId) {
    const liked = post?.likedBy.find((user) => user.id === userId);
    if (liked) {
      likedStatus = postLikeDislikeStatus.liked;
    }

    const disliked = post?.dislikedBy.find((user) => user.id === userId);
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
    owner: userId && userId === post.postedBy.id,
    files: post.files,
    likeStatus: likedStatus,
    comments: post.comments.length
  };

  return postToReturn;
}
