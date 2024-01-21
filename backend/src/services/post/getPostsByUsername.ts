// @ts-nocheck
import { User } from '../../entities/User';
import response from '../../utils/response';
import { mapPostToPostPreviewDTO } from './utils/mapPostToPostPreviewDTO';

export const getPostsByUsername = async (req) => {
  const { username } = req.query;
  const { userID } = req.body;

  const user = await User.findOne({
    where: {
      username: username
    },
    relations: [
      'posts',
      'posts.files',
      'posts.likedBy',
      'posts.dislikedBy',
      'posts.postedBy',
      'posts.comments'
    ]
  });

  const userPosts = [];
  if (user) {
    user.posts.forEach((post) => {
      userPosts.push(mapPostToPostPreviewDTO(post, userID));
    });

    return response.OK(userPosts);
  } else {
    return response.NOT_FOUND('User not found');
  }
};
