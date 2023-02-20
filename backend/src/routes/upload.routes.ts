// @ts-nocheck
import express from 'express';
import {
  uploadCommentFile,
  uploadPostFile
} from '../controllers/upload.controller';
import filesPayloadExists from '../utils/fileUploader/filesPayloadExists';
import fileExtLimiter from '../utils/fileUploader/fileExtLimiter';
import fileSizeLimiter from '../utils/fileUploader/fileSizeLimiter';
import fileUpload from 'express-fileupload';
import allowed_ext from '../utils/fileUploader/allowedFileExtensions';

const uploadRoutes = express.Router();

function recursion(obj, numOfKeys) {
  if (numOfKeys < 0) return [];
  const key = Object.keys(obj)[numOfKeys]; //fetched the key at second index
  return obj[key].concat(recursion(obj, numOfKeys - 1));
}

uploadRoutes
  .route('/post')
  .post(
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter(recursion(allowed_ext, Object.keys(allowed_ext).length - 1)),
    fileSizeLimiter,
    uploadPostFile
  );

uploadRoutes
  .route('/comment')
  .post(
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter(recursion(allowed_ext, Object.keys(allowed_ext).length - 1)),
    fileSizeLimiter,
    uploadCommentFile
  );

export default uploadRoutes;
