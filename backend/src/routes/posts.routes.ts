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
  dismissReport
} from '../controllers/posts.controller';
import tokenValidation from '../utils/tokenValidation';

const postsRoutes = express.Router();

postsRoutes.route('/').post(tokenValidation, createPost);
postsRoutes.route('/postId/:id').get(getPostById).delete(deletePost);
postsRoutes.route('/postsForHomepageFilters').post(getPostsForHomepageFilters);
postsRoutes.route('/user').get(tokenValidation, getPostsByUsername);
postsRoutes
  .route('/like')
  .post(tokenValidation, createPostLike)
  .delete(tokenValidation, deletePostLike);
postsRoutes
  .route('/dislike')
  .post(tokenValidation, createPostDislike)
  .delete(tokenValidation, deletePostDislike);
postsRoutes.route('/report').post(tokenValidation, reportPost);
postsRoutes.route('/reports').get(tokenValidation, getReportedPosts);
postsRoutes
  .route('/dismissReport/postId/:postId/reportedById/:reportedById')
  .delete(tokenValidation, dismissReport);
export default postsRoutes;
