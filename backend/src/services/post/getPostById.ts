// @ts-nocheck
import { Post } from '../../entities/Post';
import { checkIfLogged } from '../../utils/authManager';
import response from '../../utils/response';
import { mapPostToPostPreviewDTO } from './utils/mapPostToPostPreviewDTO';

export const getPostById = async (req) => {
  const status = checkIfLogged(req);
  const userID = status.userID;
  const { id } = req.params;

  const post = await Post.findOne({
    where: {
      id: id
    },
    relations: ['postedBy', 'files', 'likedBy', 'dislikedBy']
  });

  if (post) {
    return response.OK('Posts found', mapPostToPostPreviewDTO(post, userID));
  } else {
    return response.NOT_FOUND('Post not found');
  }
};
