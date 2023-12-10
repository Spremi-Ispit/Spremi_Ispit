// @ts-nocheck
import { Post } from '../../entities/Post';
import { User } from '../../entities/User';
import response from '../../utils/response';

export const reportPost = async (req) => {
  const { postID, userID } = req.body;

  const user = await User.findOne({
    where: { id: userID }
  });

  const post = await Post.findOne({
    where: {
      id: postID
    },
    relations: ['reportedBy']
  });
  if (user && post) {
    const reported = post.reportedBy.find((user) => user.id === userID);
    if (reported) {
      return response.BAD_REQUEST(`Already reported`);
    }
    post.reportedBy.push(user);
    await post.save();
    return response.OK(`Report created`);
  } else {
    return response.NOT_FOUND(`An unexpected error occured`);
  }
};
