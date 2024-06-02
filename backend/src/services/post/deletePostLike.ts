// @ts-nocheck
import { Post } from '../../entities/Post';
import { User } from '../../entities/User';
import response from '../../utils/response';
import { postLikeDislikeStatus } from './utils/postLikeDislikeStatus';

export const deletePostLike = async (req) => {
  const { userId, postID } = req.body;

  const post = await Post.findOne({
    where: { id: postID },
    relations: ['likedBy']
  });

  const user = await User.findOne({
    where: { id: userId }
  });

  if (user) {
    post.likedBy = post.likedBy.filter((likedBy) => likedBy.id !== userId);

    await post.save();

    return response.CREATED(postLikeDislikeStatus.none);
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};
