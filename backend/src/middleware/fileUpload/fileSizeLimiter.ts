// @ts-nocheck
import path from 'path';
import allowed_ext from './allowedFileExtensions';
import response from '../../utils/response';

const IMAGE_MB = 5;
const DOC_MB = 5;
const VIDEO_MB = 500;
const IMAGE_SIZE_LIMIT = IMAGE_MB * 1024 * 1024; // 5 MB
const DOC_SIZE_LIMIT = DOC_MB * 1024 * 1024; // 5 MB
const VIDEO_SIZE_LIMIT = VIDEO_MB * 1024 * 1024; // 500 MB

const fileSizeLimiter = (req, res, next) => {
  const files = req.files;
  const images = [];
  const docs = [];
  const videos = [];

  Object.keys(files).forEach((key) => {
    if (allowed_ext.images.includes(path.extname(files[key].name))) {
      images.push(files[key]);
    } else if (allowed_ext.docs.includes(path.extname(files[key].name))) {
      docs.push(files[key]);
    } else if (allowed_ext.videos.includes(path.extname(files[key].name))) {
      videos.push(files[key]);
    }
  });

  if (images.length > 10)
    return response.BAD_REQUEST("Images number can't be greater than 10");

  if (docs.length > 10)
    return response.BAD_REQUEST("Documents number can't be greater than 10");

  if (videos.length > 3)
    return response.BAD_REQUEST("Videos number can't be greater than 3");

  let filesOverLimit = [];
  // filesOverLimit = filesOverLimit.concat(
  //   checkFilesSizeLimit(images, IMAGE_SIZE_LIMIT)
  // );
  // filesOverLimit = filesOverLimit.concat(
  //   checkFilesSizeLimit(docs, DOC_SIZE_LIMIT)
  // );
  // filesOverLimit = filesOverLimit.concat(
  //   checkFilesSizeLimit(videos, VIDEO_SIZE_LIMIT)
  // );

  if (filesOverLimit.length > 0) {
    const properVerb = filesOverLimit.length > 1 ? 'are' : 'is';

    const message = `Upload failed. ${filesOverLimit.toString()} ${properVerb} over the file size limit.`;
    message += `Size limit for Images is ${IMAGE_MB}, for documents is ${DOC_MB} and for videos is ${VIDEO_MB}. `;

    return response.BAD_REQUEST(message);
  }

  next();
};

function checkFilesSizeLimit(filesToCheck, limit) {
  const largeFiles = [];
  filesToCheck.forEach((file) => {
    if (file.size > limit) {
      largeFiles.push(file.name);
    }
  });
  return largeFiles;
}

export default fileSizeLimiter;
