// @ts-nocheck
import { Post } from '../../entities/Post';
import { User } from '../../entities/User';
import response from '../../utils/response';
import { postLikeDislikeStatus } from './utils/postLikeDislikeStatus';

export const createPostLike = async (req) => {
  const { userID, postID } = req.body;

  const post = await Post.findOne({
    where: { id: postID },
    relations: ['likedBy']
  });

  const user = await User.findOne({
    where: { id: userID }
  });

  if (user) {
    post.likedBy.push(user);
    await post.save();

    return response.CREATED(postLikeDislikeStatus.liked);
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};
