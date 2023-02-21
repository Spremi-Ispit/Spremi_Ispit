import { supporetdFileTypes } from './enums';

const getExtensionFromFileName = (fileName) => {
  return fileName.split('.').pop();
};

const selectFiles = (files, ...fileTypes) => {
  const selectedFiles = files.filter((file) =>
    fileTypes.some((fileType) =>
      fileType.includes(getExtensionFromFileName(file.name).toLowerCase())
    )
  );

  return selectedFiles;
};

export const selectImages = (files) =>
  selectFiles(
    files,
    `${supporetdFileTypes.png}`,
    `${supporetdFileTypes.jpg}`,
    `${supporetdFileTypes.jpeg}`
  );

export const selectWordDocuments = (files) =>
  selectFiles(files, `${supporetdFileTypes.doc}`, `${supporetdFileTypes.docx}`);

export const selectTxtFiles = (files) =>
  selectFiles(files, `${supporetdFileTypes.txt}`);

export const selectPdfDocuments = (files) =>
  selectFiles(files, `${supporetdFileTypes.pdf}`);

export const selectVideos = (files) =>
  selectFiles(files, `${supporetdFileTypes.mp4}`);
