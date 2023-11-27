// @ts-nocheck
import express from 'express';
import {
  uploadCommentFile,
  uploadPostFile
} from '../controllers/file.controller';
import { fileMiddleware } from '../middleware/fileUpload';

const uploadRoutes = express.Router();

uploadRoutes.route('/post').post(fileMiddleware, uploadPostFile);
uploadRoutes.route('/comment').post(fileMiddleware, uploadCommentFile);

//*****************COMMENT UPLOAD WITHOUT fileMiddleware *****************/
// uploadRoutes
//   .route('/comment')
//   .post(
//     fileUpload({ createParentPath: true }),
//     filesPayloadExists,
//     fileExtLimiter(recursion(allowed_ext, Object.keys(allowed_ext).length - 1)),
//     fileSizeLimiter,
//     uploadCommentFile
//   );

export default uploadRoutes;
