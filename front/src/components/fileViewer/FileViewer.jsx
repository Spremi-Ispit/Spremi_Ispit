import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MainView from './components/mainView/MainView';
import FileSwitcher2 from './components/fileSwitcher/FileSwitcher2';

import styled from 'styled-components';
import Actions from './components/Actions';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const FileViewer = (props) => {
  const { files } = props; //files = [{src: URL.createObjectURL(...), name: "fileName"},...]
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  useEffect(() => {
    return () => {
      setActiveFileIndex(0);
    };
  }, [files]);

  return files.length > 0 ? (
    <Container>
      <MainView file={files[activeFileIndex]} />
      <FileSwitcher2
        files={files}
        activeFileIndex={activeFileIndex}
        setActiveFileIndex={setActiveFileIndex}
      />
      <Actions activeFile={files[activeFileIndex]} />
    </Container>
  ) : null;
};

export default FileViewer;
