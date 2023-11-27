// @ts-nocheck
import { In } from 'typeorm';
import response from '../../utils/response/index';
import { User } from '../../entities/User';
import { Post } from '../../entities/Post';
import { Comment } from '../../entities/Comment';
import { Blacklist } from '../../entities/Blacklist';
import { removeCommentFiles, removePostFiles } from '../file';

export const blacklistUserAccount = async (req) => {
  const { blacklistUserId } = req.body;

  const user = await User.findOne({
    where: { id: blacklistUserId }
  });

  if (user) {
    const posts = await Post.find({
      where: {
        postedBy: {
          id: user.id
        }
      }
    });

    for (const post of posts) {
      await removePostFiles(post.id);
    }

    const comments = await Comment.find({
      where: [
        { postedBy: { id: user.id } },
        { post: In(posts.map((post) => post.id)) }
      ]
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

//--------------------HELPER---------------------
async function addEmailToBlacklist(req) {
  const { email } = req.body;

  const userExists = await Blacklist.findOne({
    where: { email }
  });

  if (!userExists) {
    const user = Blacklist.create({
      email
    });

    await user.save();
    return response.OK(`User blacklisted`);
  } else {
    return response.OK(`User already blacklisted`);
  }
}
