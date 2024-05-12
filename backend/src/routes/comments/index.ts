// @ts-nocheck
import express from 'express';
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

const router = express.Router();

createComment(router);
getCommentsForPost(router);
deleteComment(router);
createCommentLike(router);
deleteCommentLike(router);
createCommentDislike(router);
deleteCommentDislike(router);
reportComment(router);
getReportedComments(router);
dismissReport(router);

export default router;
