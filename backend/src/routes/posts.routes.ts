// @ts-nocheck
import express from 'express';
import {
  getPostsByUsername,
  createPost,
  deletePost,
  getPostsForHomepageFilters,
  createPostLike,
  deletePostLike,
  createPostDislike,
  deletePostDislike,
  getPostById,
  reportPost,
  getReportedPosts,
  dismissReport,
  getCommentedPosts
} from '../controllers/posts.controller';
import { authorizeUserOnApiRequest } from '../middleware/authorizeUserOnApiRequest';

const postsRoutes = express.Router();

postsRoutes.route('/').post(authorizeUserOnApiRequest, createPost);
postsRoutes.route('/postId/:id').get(getPostById).delete(deletePost);
postsRoutes.route('/postsForHomepageFilters').post(getPostsForHomepageFilters);
postsRoutes.route('/user').get(authorizeUserOnApiRequest, getPostsByUsername);
postsRoutes
  .route('/like')
  .post(authorizeUserOnApiRequest, createPostLike)
  .delete(authorizeUserOnApiRequest, deletePostLike);
postsRoutes
  .route('/dislike')
  .post(authorizeUserOnApiRequest, createPostDislike)
  .delete(authorizeUserOnApiRequest, deletePostDislike);
postsRoutes.route('/report').post(authorizeUserOnApiRequest, reportPost);
postsRoutes.route('/reports').get(authorizeUserOnApiRequest, getReportedPosts);
postsRoutes
  .route('/dismissReport/postId/:postId/')
  .delete(authorizeUserOnApiRequest, dismissReport);
postsRoutes
  .route('/commentedBy/:username')
  .get(authorizeUserOnApiRequest, getCommentedPosts);

export default postsRoutes;
