// @ts-nocheck
import path from 'path';
import { allowedFileExtensions } from './allowedFileExtensions';

export const extractFiles = (req) => {
  const files = req.files;
  const images = [];
  const docs = [];
  const videos = [];

  Object.keys(files).forEach((key) => {
    if (allowedFileExtensions.images.includes(path.extname(files[key].name))) {
      images.push(files[key]);
    } else if (
      allowedFileExtensions.docs.includes(path.extname(files[key].name))
    ) {
      docs.push(files[key]);
    } else if (
      allowedFileExtensions.videos.includes(path.extname(files[key].name))
    ) {
      videos.push(files[key]);
    }
  });

  return { images, docs, videos };
};
