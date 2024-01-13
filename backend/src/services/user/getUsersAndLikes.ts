// @ts-nocheck
import response from '../../utils/response/index';
import { User } from '../../entities/User';

export const getUsersAndLikes = async (req) => {
  const users = await User.find({
    relations: ['posts', 'comments', 'posts.likedBy', 'comments.likedBy']
  });

  const usersResponse = [];
  users.forEach((user) => {
    let likes = 0;
    user.posts.forEach((post) => (likes += post.likedBy.length));
    user.comments.forEach((comment) => (likes += comment.likedBy.length));

    usersResponse.push({
      username: user.username,
      role: user.role,
      likes: likes,
      posts: user.posts.length,
      comments: user.comments.length
    });
  });

  return response.OK(usersResponse);
};
