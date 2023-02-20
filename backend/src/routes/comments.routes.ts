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
import tokenValidation from '../utils/tokenValidation';

const commentRoutes = express.Router();

commentRoutes.route('/').post(tokenValidation, createComment);
commentRoutes.route('/post/:postId').get(getCommentsForPost);
commentRoutes.route('/commentId/:id').delete(deleteComment);

commentRoutes
  .route('/like')
  .post(tokenValidation, createCommentLike)
  .delete(tokenValidation, deleteCommentLike);
commentRoutes
  .route('/dislike')
  .post(tokenValidation, createCommentDislike)
  .delete(tokenValidation, deleteCommentDislike);

commentRoutes.route('/report').post(tokenValidation, reportComment);
commentRoutes.route('/reports').get(tokenValidation, getReportedComments);

commentRoutes.route('/dismissReport').delete(tokenValidation, dismissReport);

export default commentRoutes;
