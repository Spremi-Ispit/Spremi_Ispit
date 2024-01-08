// @ts-nocheck
import express from 'express';
import {
  uploadCommentFile,
  uploadPostFile
} from '../controllers/file.controller';
import fileUploadMiddleware from '../middleware/fileUpload/';

const uploadRoutes = express.Router();

uploadRoutes.route('/post').post(fileUploadMiddleware, uploadPostFile);
uploadRoutes.route('/comment').post(fileUploadMiddleware, uploadCommentFile);

export default uploadRoutes;
