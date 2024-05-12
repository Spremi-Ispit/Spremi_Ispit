// @ts-nocheck
import express from 'express';
import { uploadPostFile } from './uploadPostFile';
import { uploadCommentFile } from './uploadCommentFile';

const router = express.Router();

uploadPostFile(router);
uploadCommentFile(router);

export default router;
