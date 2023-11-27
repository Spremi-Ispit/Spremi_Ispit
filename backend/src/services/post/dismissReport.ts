// @ts-nocheck
import { Post } from '../../entities/Post';
import response from '../../utils/response';

export const dismissReport = async (req) => {
  const { postId } = req.params;
  const post = await Post.findOne({
    where: {
      id: postId
    },
    relations: ['reportedBy']
  });
  if (post) {
    post.reportedBy = [];
    await post.save();
    return response.OK('Report dissmised');
  } else {
    return response.BAD_REQUEST(`post not found.`);
  }
};
