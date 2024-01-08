// @ts-nocheck
import path from 'path';
import response from '../../utils/response';
import { allowedFileExtensionsArray } from './allowedFileExtensions';

const checkFilesExtension = async (req, res) => {
  await new Promise((resolve, reject) => {
    const files = req.files;
    const fileExtensions = [];
    Object.keys(files).forEach((key) => {
      fileExtensions.push(path.extname(files[key].name));
    });

    const allowed = fileExtensions.every((ext) =>
      allowedFileExtensionsArray.includes(ext.toLowerCase())
    );

    if (!allowed) {
      let message =
        `Upload failed. Only ${allowedFileExtensionsArray.toString()} files allowed.`.replaceAll(
          ',',
          ', '
        );

      reject(response.BAD_REQUEST(message));
    }

    resolve();
  });
};

export default checkFilesExtension;
