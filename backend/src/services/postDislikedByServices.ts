// @ts-nocheck
import { User } from '../entities/User';
import { Post } from '../entities/Post';
import { postLikeDislikeStatus } from '../utils/enums';
import response from '../utils/response/index';

export const createPostDislike = async (req) => {
  const { userID, postID } = req.body;

  const post = await Post.findOne({
    where: { id: postID },
    relations: ['dislikedBy']
  });

  const user = await User.findOneBy(userID);
  if (user) {
    post.dislikedBy.push(user);
    await post.save();

    return response.CREATED(
      `Post dislike created`,
      postLikeDislikeStatus.disliked
    );
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};

export const deletePostDislike = async (req) => {
  const { userID, postID } = req.body;

  const post = await Post.findOne({
    where: { id: postID },
    relations: ['dislikedBy']
  });

  const user = await User.findOneBy(userID);
  if (user) {
    post.dislikedBy = post.dislikedBy.filter(
      (dislikedBy) => dislikedBy.id !== userID
    );

    await post.save();

    return response.CREATED(`Post dislike deleted`, postLikeDislikeStatus.none);
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};
