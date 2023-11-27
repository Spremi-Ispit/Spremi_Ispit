import React from 'react';
import styled from 'styled-components';
import { assets } from '../../../../../assets';
import { FilesSelector } from '../../../../../utils/managers/FilesSelector';

const Preview = styled.div`
  width: 60px;
  height: 60px;
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

  const filesIndex = (files) => {
    let firstIndex = activeFileIndex - 1;
    const secondIndex = activeFileIndex;
    let thirdIndex = activeFileIndex + 1;

    if (firstIndex < 0) {
      firstIndex = files.length - 1;
    }

    if (thirdIndex > files.length - 1) {
      thirdIndex = 0;
    }

    if (files.length === 1) {
      return [firstIndex];
    }

    if (files.length === 2) {
      return [firstIndex, secondIndex];
    }

    return [firstIndex, secondIndex, thirdIndex];
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
      {filesIndex(files).map((fileIndex) => (
        <Preview
          src={preview(files[fileIndex])}
          key={fileIndex}
          onClick={() => setActiveFileIndex(fileIndex)}
        />
      ))}
    </FilesPreviewDiv>
  );
};

export default FilesPreview;
