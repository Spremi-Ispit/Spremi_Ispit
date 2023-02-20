import React from 'react';
import { FileContainer } from './styles';
import Viewer from 'react-file-viewer';

export const FileView = ({ file }) => {
  //file = {src: URL.createObjectURL(...), name: "fileName"}

  return (
    <FileContainer>
      <Viewer fileType={file.name.split('.')[1]} filePath={file.src} />
    </FileContainer>
  );
};
