// @ts-nocheck
import { Comment } from '../../entities/Comment';
import { Post } from '../../entities/Post';
import { User } from '../../entities/User';
import response from '../../utils/response';
import { mapPostToPostPreviewDTO } from './utils/mapPostToPostPreviewDTO';

export const getCommentedPosts = async (req) => {
  const { userID } = req.body;
  const { username } = req.params;

  const user = await User.findOne({
    where: {
      username
    }
  });

  const comments = await Comment.find({
    where: {
      postedBy: user
    }
  });

  let commentedPosts = [];

  for (let comment of comments) {
    const commentedPost = await Post.findOne({
      where: {
        comments: [{ id: comment.id }]
      },
      relations: ['files', 'likedBy', 'dislikedBy', 'postedBy', 'comments']
    });

    const exist = commentedPosts.find((post) => post.id === commentedPost.id);
    if (!exist) {
      commentedPosts.push(commentedPost);
    }
  }

  let mapCommentedPosts = [];
  commentedPosts.forEach((commentedPost) => {
    mapCommentedPosts.push(mapPostToPostPreviewDTO(commentedPost, userID));
  });

  return response.OK(mapCommentedPosts);
};
