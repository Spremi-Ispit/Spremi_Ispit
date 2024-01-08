// @ts-nocheck
import fileUpload from 'express-fileupload';
import response from '../../utils/response';

export const createFileUploadMiddleware = async (req, res) => {
  await new Promise((resolve, reject) => {
    // This line initializes the express-fileupload middleware by calling it with an options object.
    // The option createParentPath: true is passed to ensure that if the specified upload path includes
    // non-existent directories, it will create those directories.
    const handleFileUpload = fileUpload({ createParentPath: true });

    handleFileUpload(req, res, (err) => {
      if (err) {
        const r = response.INTERNAL_SERVER_ERROR('Internal server error');
        return res.status(r.statusCode).send(r);
      }

      resolve();
    });
  });
};
