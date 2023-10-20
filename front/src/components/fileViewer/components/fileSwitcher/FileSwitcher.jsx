import React from 'react';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';
import FilesPreview from './components/FilesPreview';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  position: relative;
  margin-top: 0.2rem;
  height: 20%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlidesContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FileSwitcher = ({
  files,
  activeFileIndex,
  setActiveFileIndex,
}) => {
  return (
    <ControlsContainer>
      <SlidesContainer>
        <LeftArrow
          files={files}
          activeFileIndex={activeFileIndex}
          setActiveFileIndex={setActiveFileIndex}
        />
        <FilesPreview
          files={files}
          activeFileIndex={activeFileIndex}
          setActiveFileIndex={setActiveFileIndex}
        />
        <RightArrow
          files={files}
          activeFileIndex={activeFileIndex}
          setActiveFileIndex={setActiveFileIndex}
        />
      </SlidesContainer>
    </ControlsContainer>
  );
};

export default FileSwitcher;
