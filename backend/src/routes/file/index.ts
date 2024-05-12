// @ts-nocheck
import express from 'express';
import fileUploadMiddleware from '../../middleware/fileUpload';
import { uploadPostFile } from './uploadPostFile';
import { uploadCommentFile } from './uploadCommentFile';

const uploadRoutes = express.Router();

uploadRoutes.route('/post').post(fileUploadMiddleware, uploadPostFile);
uploadRoutes.route('/comment').post(fileUploadMiddleware, uploadCommentFile);

export default uploadRoutes;
