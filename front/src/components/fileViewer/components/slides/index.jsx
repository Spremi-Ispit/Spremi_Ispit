import React from 'react';
import { ControlsContainer, SlidesContainer } from './styles';
import LeftArrow from './components/leftArrow';
import RightArrow from './components/rightArrow';
import Slides from './components/slides';

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
        <Slides
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
