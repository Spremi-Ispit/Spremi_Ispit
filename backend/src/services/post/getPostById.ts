// @ts-nocheck
import { Post } from '../../entities/Post';
import { checkIfLogged } from '../../utils/authManager';
import response from '../../utils/response';
import { mapPostToPostPreviewDTO } from './utils/mapPostToPostPreviewDTO';

export const getPostById = async (req) => {
  const status = checkIfLogged(req);
  const userId = status.userId;
  const { id } = req.params;

  const post = await Post.findOne({
    where: {
      id: id
    },
    relations: ['postedBy', 'files', 'likedBy', 'dislikedBy', 'comments']
  });

  if (post) {
    return response.OK(mapPostToPostPreviewDTO(post, userId));
  } else {
    return response.NOT_FOUND('Post not found');
  }
};
