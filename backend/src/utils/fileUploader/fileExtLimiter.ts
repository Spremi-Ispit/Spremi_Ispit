// @ts-nocheck
import path from 'path';
import response from '../response/index';

const fileExtLimiter = (allowedExtArray) => {
  return (req, res, next) => {
    const files = req.files;
    const fileExtensions = [];
    Object.keys(files).forEach((key) => {
      fileExtensions.push(path.extname(files[key].name));
    });

    // Are the file extension allowed?
    const allowed = fileExtensions.every((ext) => allowedExtArray.includes(ext.toLowerCase()));

    if (!allowed) {
      const message = `Upload failed. Only ${allowedExtArray.toString()} files allowed.`.replaceAll(
        ',',
        ', '
      );

      return response.BAD_REQUEST(message);
    }

    next();
  };
};

export default fileExtLimiter;
