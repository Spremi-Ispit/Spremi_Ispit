// @ts-nocheck
import fileUpload from 'express-fileupload';
import filesPayloadExists from './filesPayloadExists';
import fileExtLimiter from './fileExtLimiter';
import fileSizeLimiter from './fileSizeLimiter';
import allowed_ext from './allowedFileExtensions';

function recursion(obj, numOfKeys) {
  if (numOfKeys < 0) return [];
  const key = Object.keys(obj)[numOfKeys]; //fetched the key at second index
  return obj[key].concat(recursion(obj, numOfKeys - 1));
}

export const fileMiddleware = (req, res, next) => {
  const fileUploadMiddleware = fileUpload({ createParentPath: true });
  const filesPayloadExistsMiddleware = filesPayloadExists;
  const fileExtLimiterMiddleware = fileExtLimiter(
    recursion(allowed_ext, Object.keys(allowed_ext).length - 1)
  );
  const fileSizeLimiterMiddleware = fileSizeLimiter;

  fileUploadMiddleware(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: 'File upload failed.' });
    }

    filesPayloadExistsMiddleware(req, res, (err) => {
      fileExtLimiterMiddleware(req, res, (err) => {
        fileSizeLimiterMiddleware(req, res, (err) => {
          next();
        });
      });
    });
  });
};
