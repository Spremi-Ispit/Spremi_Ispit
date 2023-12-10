// @ts-nocheck
import { Post } from '../../entities/Post';
import { User } from '../../entities/User';
import response from '../../utils/response';
import { postLikeDislikeStatus } from './utils/postLikeDislikeStatus';

export const createPostDislike = async (req) => {
  const { userID, postID } = req.body;

  const post = await Post.findOne({
    where: { id: postID },
    relations: ['dislikedBy']
  });

  const user = await User.findOne({
    where: { id: userID }
  });

  if (user) {
    post.dislikedBy.push(user);
    await post.save();

    return response.CREATED(postLikeDislikeStatus.disliked);
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};
