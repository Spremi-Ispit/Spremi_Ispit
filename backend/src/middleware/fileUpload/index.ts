// @ts-nocheck
import { createFileUploadMiddleware } from './createFileUploadMiddleware';
import { checkFilesPayload } from './checkFilesPayload';
import checkFilesExtension from './checkFilesExtension';
import checkFilesCount from './checkFilesCount';

const fileUploadMiddleware = async (req, res, next) => {
  try {
    await createFileUploadMiddleware(req, res);
    await checkFilesPayload(req, res);
    // await checkFilesExtension(req, res);
    // await checkFilesCount(req, res);
  } catch (err) {
    console.log(err);
    err.response = 'File upload failed: ' + err.response;
    return res.status(err.statusCode).send(err);
  }

  next();
};

export default fileUploadMiddleware;
