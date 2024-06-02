// @ts-nocheck
import { Comment } from '../../entities/Comment';
import { Post } from '../../entities/Post';
import { User } from '../../entities/User';
import { userRole } from '../../utils/enums';
import response from '../../utils/response';
import { removeCommentFiles, removePostFiles } from '../file';

export const deletePost = async (req) => {
  const { id } = req.params;
  const { userId } = req.body;

  const user = await User.findOne({
    where: { id: userId }
  });

  const post = await Post.findOne({
    where: {
      id: id
    },
    relations: ['postedBy']
  });

  if (!(post?.postedBy.id === userId || user?.role === userRole.admin)) {
    return response.UNAUTHORIZED(`Not authorized`);
  }

  if (post) {
    await removePostFiles(post.id);

    const comments = await Comment.find({
      where: {
        post: post
      }
    });

    for (const comment of comments) {
      await removeCommentFiles(comment.id);
    }

    await post.remove();
    return response.OK('Post deleted');
  } else {
    return response.NOT_FOUND(id);
  }
};
