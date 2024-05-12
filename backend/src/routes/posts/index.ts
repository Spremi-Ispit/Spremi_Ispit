// @ts-nocheck
import express from 'express';

import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import { createPost } from './createPost';
import { deletePost } from './deletePost';
import { getPostsForHomepageFilters } from './getPostsForHomepageFilters';
import { getPostsByUsername } from './getPostsByUsername';
import { createPostLike } from './createPostLike';
import { deletePostLike } from './deletePostLike';
import { createPostDislike } from './createPostDislike';
import { deletePostDislike } from './deletePostDislike';
import { reportPost } from './reportPost';
import { getReportedPosts } from './getReportedPosts';
import { dismissReport } from './dismissReport';
import { getCommentedPosts } from './getCommentedPosts';
import { getPostById } from './getPostById';

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
