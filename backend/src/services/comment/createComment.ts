// @ts-nocheck
import response from '../../utils/response/index';
import { Comment } from '../../entities/Comment';
import { User } from '../../entities/User';
import { Post } from '../../entities/Post';

export const createComment = async (req) => {
  const { text, postID, userID } = req.body;

  const user = await User.findOne({
    where: { id: userID }
  });

  const post = await Post.findOne({
    where: { id: postID }
  });

  if (user && post) {
    const newComment = Comment.create({
      postedBy: user,
      post,
      text
    });
    await newComment.save();
    return response.OK(newComment.id);
  } else {
    return response.BAD_REQUEST(`User or post doesnt exist`);
  }
};
