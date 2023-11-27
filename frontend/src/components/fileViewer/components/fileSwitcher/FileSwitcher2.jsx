import React from 'react';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';
import styled from 'styled-components';
import FilesPreview from './components/FilesPreview';

const FileSwitcherDiv = styled.div`
  position: absolute;
  z-index: 999999;
  top: 50%;
  left: 0;
  right: 0;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
`;

export const FileSwitcher2 = ({
  files,
  activeFileIndex,
  setActiveFileIndex,
}) => {
  return (
    <>
      <FileSwitcherDiv>
        <LeftArrow
          files={files}
          activeFileIndex={activeFileIndex}
          setActiveFileIndex={setActiveFileIndex}
        />
        <RightArrow
          files={files}
          activeFileIndex={activeFileIndex}
          setActiveFileIndex={setActiveFileIndex}
        />
      </FileSwitcherDiv>
      <FilesPreview
        files={files}
        activeFileIndex={activeFileIndex}
        setActiveFileIndex={setActiveFileIndex}
      />
    </>
  );
};

export default FileSwitcher2;
