// @ts-nocheck
const images = ['.jpg', '.png', '.jpeg'];
const docs = ['.pdf', '.doc', '.docx', '.txt'];
const videos = ['.mp4'];

export const allowedFileExtensions = {
  images,
  docs,
  videos
};

export const allowedFileExtensionsArray = [...images, docs, videos];
