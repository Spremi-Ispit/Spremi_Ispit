import React from 'react';
import {
  selectImages,
  selectVideos,
  selectWordDocuments,
  selectPdfDocuments,
} from '../../../../utils/filesSelector';
import { ImageView } from './components/image';
import { FileView } from './components/file';
import { ViewContainer } from './styles';
import { VideoView } from './components/video';

export const MainView = ({ file }) => {
  //file = {src: URL.createObjectURL(...), name: "fileName"}

  const viewToRender = () => {
    const image = selectImages([file])[0];
    const document = selectWordDocuments([file])[0];
    const pdf = selectPdfDocuments([file])[0];
    const video = selectVideos([file])[0];

    if (image) {
      return <ImageView file={image} />;
    }

    if (document) {
      return <FileView file={document} />;
    }

    if (pdf) {
      return <FileView file={pdf} />;
    }

    if (video) {
      return <VideoView file={video} />;
    }
  };

  return <ViewContainer>{viewToRender()}</ViewContainer>;
};

export default MainView;
