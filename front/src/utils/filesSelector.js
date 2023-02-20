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
  selectFiles(files, '.png', '.jpg', '.jpeg');

export const selectWordDocuments = (files) =>
  selectFiles(files, '.doc', '.docx');

export const selectPdfDocuments = (files) => selectFiles(files, '.pdf');

export const selectVideos = (files) => selectFiles(files, '.mp4');
