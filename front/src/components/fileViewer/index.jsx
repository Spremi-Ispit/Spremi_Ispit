import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Link, MinHeightContainer } from './styles';
import MainView from './components/mainView';
import Slides from './components/slides';

export const FileViewer = (props) => {
  const { files } = props; //files = [{src: URL.createObjectURL(...), name: "fileName"},...]
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  useEffect(() => {
    return () => {
      setActiveFileIndex(0);
    };
  }, [files]);

  return files.length > 0 ? (
    <MinHeightContainer>
      <Container>
        <MainView file={files[activeFileIndex]} />
        <Slides
          files={files}
          activeFileIndex={activeFileIndex}
          setActiveFileIndex={setActiveFileIndex}
        />
        <div>
          <a href={files[activeFileIndex].src} download>
            Click to download
          </a>
          <Link onClick={() => window.open(files[activeFileIndex].src)}>
            Open file in new tab
          </Link>
        </div>
      </Container>
    </MinHeightContainer>
  ) : null;
};

export default FileViewer;
