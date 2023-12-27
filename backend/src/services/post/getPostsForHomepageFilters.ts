// @ts-nocheck
import response from '../../utils/response/index';
import { checkIfLogged } from '../../utils/authManager';
import { Post } from '../../entities/Post';
import { In } from 'typeorm';
import { mapPostToPostPreviewDTO } from './utils/mapPostToPostPreviewDTO';
import { buildPostsQueryForFilters } from './utils/buildPostsQueryForFilters';

//****left over from the time when the app had paginaton*/
// const extractPostsForPage = (postsQuery, startIndex, count) => {
//   if ((startIndex, count)) {
//     const perPage = count;
//     const page = Math.floor(startIndex / count) + 1;
//     const skip = perPage * page - perPage;
//     postsQuery = postsQuery.skip(skip).take(perPage);
//   }

//   return postsQueqry;
// };

export const getPostsForHomepageFilters = async (req) => {
  const { postId } = req.body;

  let postsQuery = buildPostsQueryForFilters(req.body);

  // if (postId) {
  //   postsQuery = postsQuery.where(`post.id > ${postId}`);
  // }
  // postsQuery = postsQuery.take(5);

  let postResults = await postsQuery.getRawAndEntities();
  let postsIds = [];

  postResults.raw.forEach((post) => {
    postsIds.push(post.post_id);
  });

  const count = 5;
  if (!postId) {
    postsIds = postsIds.splice(0, count);
  } else {
    const postIndex = postsIds.findIndex((id) => id === postId);
    const nextPostIndex = postIndex + 1;
    postsIds = postsIds.splice(nextPostIndex, nextPostIndex + count);
  }

  console.log(postsIds);
  const posts = await Post.find({
    where: {
      id: In(postsIds)
    },
    relations: ['postedBy', 'files', 'likedBy', 'dislikedBy']
  });

  const status = checkIfLogged(req);
  const userID = status.userID;

  const postArray = [];
  postsIds.forEach((id, index) => {
    const post = posts.find((post) => post.id === id);
    if (post) {
      postArray.push(mapPostToPostPreviewDTO(post, userID));
    }
  });

  return response.OK(postArray);
};
