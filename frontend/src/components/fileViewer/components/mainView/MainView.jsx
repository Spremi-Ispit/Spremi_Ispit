import React from 'react';
import styled from 'styled-components';
import { ImageView } from './components/ImageView';
import { PDFView } from './components/PDFView';
import { VideoView } from './components/VideoView';
import { FilesSelector } from '../../../../utils/managers/FilesSelector';
import DocumentView from './components/DocumentView';

const ViewContainer = styled.div`
  width: 100%;
`;

export const MainView = ({ file }) => {
  //file = {src: URL.createObjectURL(...), name: "fileName"}

  const viewToRender = () => {
    const filesSelector = new FilesSelector();

    if (filesSelector.isFileImage(file)) return <ImageView file={file} />;
    if (filesSelector.isFileDocument(file)) return <DocumentView file={file} />;
    if (filesSelector.isFileText(file)) return <DocumentView file={file} />;
    if (filesSelector.isFilePDF(file)) return <PDFView file={file} />;
    if (filesSelector.isFileVideo(file)) return <VideoView file={file} />;
  };

  return <ViewContainer>{viewToRender()}</ViewContainer>;
};

export default MainView;
