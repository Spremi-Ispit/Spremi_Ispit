// @ts-nocheck
import express from 'express';
import {
  getCommentsForPost,
  createComment,
  deleteComment,
  createCommentLike,
  deleteCommentLike,
  createCommentDislike,
  deleteCommentDislike,
  reportComment,
  getReportedComments,
  dismissReport
} from '../controllers/comment.controller';
import { authorizeUserOnApiRequest } from '../middleware/authorizeUserOnApiRequest';

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
