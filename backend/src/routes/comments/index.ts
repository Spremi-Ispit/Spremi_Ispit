// @ts-nocheck
import express from 'express';
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import { createComment } from './createComment';
import { getCommentsForPost } from './getCommentsForPost';
import { deleteComment } from './deleteComment';
import { createCommentLike } from './createCommentLike';
import { deleteCommentLike } from './deleteCommentLike';
import { createCommentDislike } from './createCommentDislike';
import { deleteCommentDislike } from './deleteCommentDislike';
import { reportComment } from './reportComment';
import { getReportedComments } from './getReportedComments';
import { dismissReport } from './dismissReport';

const commentRoutes = express.Router();

commentRoutes.route('/').post(authorizeUserOnApiRequest, createComment);

commentRoutes.route('/post/:postId').get(getCommentsForPost);

commentRoutes.route('/commentId/:id').delete(deleteComment);

commentRoutes
  .route('/like')
  .post(authorizeUserOnApiRequest, createCommentLike)
  .delete(authorizeUserOnApiRequest, deleteCommentLike);

commentRoutes
  .route('/dislike')
  .post(authorizeUserOnApiRequest, createCommentDislike)
  .delete(authorizeUserOnApiRequest, deleteCommentDislike);

commentRoutes.route('/report').post(authorizeUserOnApiRequest, reportComment);

commentRoutes
  .route('/reports')
  .get(authorizeUserOnApiRequest, getReportedComments);

commentRoutes
  .route('/dismissReport')
  .delete(authorizeUserOnApiRequest, dismissReport);

export default commentRoutes;
