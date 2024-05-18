// @ts-nocheck
import express from 'express';

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

const router = express.Router();

createPost(router);
getPostById(router);
deletePost(router);
getPostsForHomepageFilters(router);
getPostsByUsername(router);
createPostLike(router);
deletePostLike(router);
createPostDislike(router);
deletePostDislike(router);
reportPost(router);
getReportedPosts(router);
dismissReport(router);
getCommentedPosts(router);

export default router;
