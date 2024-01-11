import React from 'react';
import { ImageView } from './components/ImageView';
import { VideoView } from './components/VideoView';
import { FilesSelector } from '../../../../utils/managers/FilesSelector';
import GoogleDocsViewer from './components/GoogleDocsViewer';

export const MainView = ({ file }) => {
  //file = {src: URL.createObjectURL(...), name: "fileName"}

  const filesSelector = new FilesSelector();

  if (filesSelector.isFileImage(file)) {
    return <ImageView file={file} />;
  }

  if (filesSelector.isFileDoc(file)) {
    return <GoogleDocsViewer file={file} />;
  }

  if (filesSelector.isFileText(file)) {
    return <GoogleDocsViewer file={file} />;
  }

  if (filesSelector.isFilePDF(file)) {
    return <GoogleDocsViewer file={file} />;
  }

  if (filesSelector.isFileVideo(file)) {
    return <VideoView file={file} />;
  }

  return (
    <h3>
      Ne umemo da prikazemo ovaj tip datoteke. Preuzmite datoteku ili pokusajte
      da je otvorite u novoj kartici.
    </h3>
  );
};

export default MainView;
