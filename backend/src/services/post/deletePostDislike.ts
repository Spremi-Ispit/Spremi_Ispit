// @ts-nocheck
import { Post } from '../../entities/Post';
import { User } from '../../entities/User';
import response from '../../utils/response';
import { postLikeDislikeStatus } from './utils/postLikeDislikeStatus';

export const deletePostDislike = async (req) => {
  const { userID, postID } = req.body;

  const post = await Post.findOne({
    where: { id: postID },
    relations: ['dislikedBy']
  });

  const user = await User.findOne({
    where: { id: userID }
  });

  if (user) {
    post.dislikedBy = post.dislikedBy.filter(
      (dislikedBy) => dislikedBy.id !== userID
    );

    await post.save();

    return response.CREATED(postLikeDislikeStatus.none);
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};
