import React from 'react';
import styled from 'styled-components';
import { assets } from '../../../../../assets';
import { FilesSelector } from '../../../../../utils/managers/FilesSelector';

const Preview = styled.div`
  width: 60px;
  height: 60px;
  border: ${({ isSelected }) => (isSelected ? '1px solid blue' : 'none')};
  cursor: pointer;

  margin: 5px;
  border-radius: 10px;
  background-image: ${({ src }) => (src ? `url(${src})` : 'transparent')};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const FilesPreviewDiv = styled.div`
  display: flex;
`;

export const FilesPreview = ({
  files,
  activeFileIndex,
  setActiveFileIndex,
}) => {
  const filesSelector = new FilesSelector();

  const preview = (file) => {
    if (filesSelector.isFileImage(file)) return file.src;
    if (filesSelector.isFileDocument(file)) return assets.fileExtension.docx;
    if (filesSelector.isFilePDF(file)) return assets.fileExtension.pdf1;
    if (filesSelector.isFileVideo(file)) return assets.fileExtension.video;
    if (filesSelector.isFileText(file)) return assets.fileExtension.txt1;
  };

  const filesToPreview = (files) => {
    const lastFileIndex = files.length - 1;

    const firstIndex =
      activeFileIndex === 0 ? lastFileIndex : activeFileIndex - 1;
    const secondIndex = activeFileIndex;
    const thirdIndex = activeFileIndex > lastFileIndex ? 0 : activeFileIndex;

    if (files.length < 3) {
      return files;
    }

    return [files[firstIndex], files[secondIndex], files[thirdIndex]];
  };

  const isSelected = (index) => {
    //for less than 3 files, the active one will be selected
    if (files.length < 3) {
      return index === activeFileIndex;
    }

    //for more than 3 files, always the second one will be selected
    if (index === 1) {
      return true;
    }

    return false;
  };

  return (
    <FilesPreviewDiv>
      {filesToPreview(files).map((file, index) => (
        <Preview
          src={preview(file)}
          isSelected={isSelected(index)}
          key={index}
          onClick={() => setActiveFileIndex(index)}
        />
      ))}
    </FilesPreviewDiv>
  );
};

export default FilesPreview;
