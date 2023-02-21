import React from 'react';
import { Slide } from './styles';
import {
  selectImages,
  selectVideos,
  selectWordDocuments,
  selectPdfDocuments,
  selectTxtFiles,
} from '../../../../../../utils/filesSelector';
import { assets } from '../../../../../../assets';

export const Slides = ({ files, activeFileIndex, setActiveFileIndex }) => {
  const createSlidingImages = (files) => {
    const slidingImages = [];
    let first = 0,
      second = 0,
      third = 0;

    if (files.length > 2) {
      first = activeFileIndex === 0 ? files.length - 1 : activeFileIndex - 1;
      second = activeFileIndex;
      third = activeFileIndex === files.length - 1 ? 0 : activeFileIndex + 1;

      slidingImages[0] = {
        index: first,
        content: files[first],
      };
      slidingImages[1] = {
        index: second,
        content: files[second],
      };
      slidingImages[2] = {
        index: third,
        content: files[third],
      };
    } else if (files.length === 2) {
      slidingImages[0] = {
        index: 0,
        content: files[0],
      };
      slidingImages[1] = {
        index: 1,
        content: files[1],
      };
    } else {
      slidingImages[0] = {
        index: activeFileIndex,
        content: files[activeFileIndex],
      };
    }
    return slidingImages;
  };

  const slidingImage = (file) => {
    const image = selectImages([file])[0];
    const document = selectWordDocuments([file])[0];
    const pdf = selectPdfDocuments([file])[0];
    const video = selectVideos([file])[0];
    const txt = selectTxtFiles([file])[0];

    if (image) return image.src;

    if (document) return assets.fileExtension.docx;

    if (pdf) return assets.fileExtension.pdf1;

    if (video) return assets.fileExtension.video;

    if (txt) return assets.fileExtension.txt1;
  };

  return createSlidingImages(files).map((file, index) => (
    <Slide
      key={index}
      image={slidingImage(file.content)}
      isSelected={
        index ===
        (files.length === 2 ? activeFileIndex : files.length > 1 ? 1 : 0)
      }
      onClick={() => setActiveFileIndex(file.index)}
    />
  ));
};

export default Slides;
