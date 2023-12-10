import React, { useEffect, useRef, useState } from 'react';
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
  justify-content: center;
`;

export const FileSwitcher = ({
  files,
  activeFileIndex,
  setActiveFileIndex,
}) => {
  const ref = useRef(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (scroll) {
      ref.current.scrollIntoView({ block: 'center' });
      setScroll(false);
    }
  }, [scroll]);

  const handleClick = () => {
    setScroll(true);
  };

  return (
    <ControlsContainer ref={ref} onClick={handleClick}>
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
