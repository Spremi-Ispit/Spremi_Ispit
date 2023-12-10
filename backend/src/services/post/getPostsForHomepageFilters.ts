// @ts-nocheck
import response from '../../utils/response/index';
import { checkIfLogged } from '../../utils/authManager';
import { Post } from '../../entities/Post';
import { In } from 'typeorm';
import { mapPostToPostPreviewDTO } from './utils/mapPostToPostPreviewDTO';
import { buildPostsQueryForFilters } from './utils/buildPostsQueryForFilters';

const extractPostsForPage = (postsQuery, startIndex, count) => {
  if ((startIndex, count)) {
    const perPage = count;
    const page = Math.floor(startIndex / count) + 1;
    const skip = perPage * page - perPage;
    postsQuery = postsQuery.skip(skip).take(perPage);
  }

  return postsQuery;
};

export const getPostsForHomepageFilters = async (req) => {
  let { startIndex, count } = req.body;
  let postsQuery = buildPostsQueryForFilters(req.body);

  const totalNumberOfPosts = await postsQuery.getCount();
  const totalNumberOfPages = count
    ? Math.ceil(totalNumberOfPosts / count)
    : totalNumberOfPosts;

  postsQuery = extractPostsForPage(postsQuery, startIndex, count);

  let postResults = await postsQuery.getRawAndEntities();

  let postsIds = [];

  postResults.raw.forEach((post) => {
    postsIds.push(post.post_id);
  });

  const posts = await Post.find({
    where: {
      id: In(postsIds)
    },
    relations: ['postedBy', 'files', 'likedBy', 'dislikedBy']
  });

  const status = checkIfLogged(req);
  const userID = status.userID;

  const data = {
    totalNumberOfPosts,
    totalNumberOfPages,
    posts: (() => {
      const postArray = [];
      postsIds.forEach((id, index) => {
        const post = posts.find((post) => post.id === id);
        if (post) {
          postArray.push(mapPostToPostPreviewDTO(post, userID));
        }
      });
      return postArray;
    })()
  };

  return response.OK(data);
};
