// @ts-nocheck
import { User } from '../entities/User';
import { Post } from '../entities/Post';
import { postLikeDislikeStatus } from '../utils/enums';
import response from '../utils/response/index';

export const createPostLike = async (req) => {
  const { userID, postID } = req.body;

  const post = await Post.findOne({
    where: { id: postID },
    relations: ['likedBy']
  });

  const user = await User.findOneBy(userID);

  if (user) {
    post.likedBy.push(user);
    await post.save();

    return response.CREATED(`Post like created`, postLikeDislikeStatus.liked);
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};

export const deletePostLike = async (req) => {
  const { userID, postID } = req.body;

  const post = await Post.findOne({
    where: { id: postID },
    relations: ['likedBy']
  });

  const user = await User.findOneBy(userID);
  if (user) {
    post.likedBy = post.likedBy.filter((likedBy) => likedBy.id !== userID);

    await post.save();

    return response.CREATED(`Post like deleted`, postLikeDislikeStatus.none);
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};
