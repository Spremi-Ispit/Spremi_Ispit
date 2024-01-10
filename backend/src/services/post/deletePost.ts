// @ts-nocheck
import { Comment } from '../../entities/Comment';
import { Post } from '../../entities/Post';
import response from '../../utils/response';
import { removeCommentFiles, removePostFiles } from '../file';

export const deletePost = async (req) => {
  const { id } = req.params;

  const post = await Post.findOne({
    where: {
      id: id
    }
  });
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
