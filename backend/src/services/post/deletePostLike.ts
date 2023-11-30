// @ts-nocheck
import { Post } from '../../entities/Post';
import { User } from '../../entities/User';
import response from '../../utils/response';
import { postLikeDislikeStatus } from './utils/postLikeDislikeStatus';

export const deletePostLike = async (req) => {
  const { userID, postID } = req.body;

  const post = await Post.findOne({
    where: { id: postID },
    relations: ['likedBy']
  });

  const user = await User.findOne({
    where: { id: userID }
  });

  if (user) {
    post.likedBy = post.likedBy.filter((likedBy) => likedBy.id !== userID);

    await post.save();

    return response.CREATED(postLikeDislikeStatus.none);
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};
