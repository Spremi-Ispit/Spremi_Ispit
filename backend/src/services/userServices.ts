// @ts-nocheck
import response from '../utils/response/index';
import { addEmailToBlacklist } from './blacklistServices';
import { User } from '../entities/User';
import { Post } from '../entities/Post';
import { removeCommentFiles, removePostFiles } from './fileServices';
import { In } from 'typeorm';
import { loginUser } from './authServices';
import bcrypt from 'bcrypt';

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
      likes: likes
    });
  });

  return response.OK(`Users retrieved`, usersResponse);
};

export const getUsernamesWithRoles = async (req) => {
  const users = await User.find();
  const usersResponse = [];
  users.forEach((user) => {
    usersResponse.push({
      username: user.username,
      role: user.role,
      email: user.email
    });
  });

  return response.OK(`Users retrieved`, usersResponse);
};

export const updateUserRole = async (req) => {
  const { email, role } = req.body;

  const user = await User.findOne({
    where: {
      email
    }
  });

  if (user) {
    user.role = role;
    await user.save();
    return response.OK(`User role updated`);
  } else {
    return response.NOT_FOUND(`User not found`);
  }
};

export const getUserByUsername = async (req) => {
  const { username } = req.params;

  const user = await User.findOne({
    where: {
      username
    }
  });

  if (user) {
    return response.OK(`User found`, user);
  } else {
    return response.NOT_FOUND(`No user found`);
  }
};

export const banUserAccount = async (req) => {
  const { banUserId } = req.body;
  const user = await User.findOneBy(banUserId);

  if (user) {
    user.banned = true;
    await user.save();
    return response.OK(`User banned`);
  } else {
    return response.NOT_FOUND(`User not found`);
  }
};

export const unbanUserAccount = async (req) => {
  const { unbanUserId } = req.body;
  const user = await User.findOneBy(unbanUserId);

  if (user) {
    user.banned = false;
    await user.save();
    return response.OK(`User banned`);
  } else {
    return response.NOT_FOUND(`User not found`);
  }
};

export const blacklistUserAccount = async (req) => {
  const { blacklistUserId } = req.body;

  const user = await User.findOneBy(blacklistUserId);

  if (user) {
    const posts = await Post.find({
      where: {
        user: {
          id: user.id
        }
      }
    });

    for (const post of posts) {
      await removePostFiles(post.id);
    }

    const comments = await Comment.find({
      where: {
        or: [{ user: { id: user.id } }, { post: In(posts) }]
      }
    });

    for (const comment of comments) {
      await removeCommentFiles(comment.id);
    }

    await user.remove();
    return await addEmailToBlacklist(req);
  } else {
    return response.NOT_FOUND(`User not found`);
  }
};

export const updatePassword = async (req) => {
  const { newPassword, password, email } = req.body;

  const user = await User.findOne({
    where: { email }
  });

  if (!user) {
    return response.NOT_FOUND(`User not found`);
  } else {
    if (await bcrypt.compare(password, user.password)) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
      req.body.password = newPassword;
      return await loginUser(req);
    } else {
      return response.NOT_FOUND(`User not found`);
    }
  }
};

export const updateUsername = async (req) => {
  const { password, email, newUsername } = req.body;

  const user = await User.findOne({
    where: { email }
  });

  try {
    if (!user) {
      return response.NOT_FOUND(`User not found`);
    } else {
      if (await bcrypt.compare(password, user.password)) {
        user.username = newUsername;
        await user.save();
        return await loginUser(req);
      } else {
        return response.NOT_FOUND(`User not found`);
      }
    }
  } catch (err) {
    return response.INTERNAL_SERVER_ERROR(err.toString());
  }
};
