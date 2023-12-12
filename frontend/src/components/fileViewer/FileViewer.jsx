import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MainView from './components/mainView/MainView';
import styled from 'styled-components';
import OpenInNewTab from './components/OpenInNewTab';
import Download from './components/Download';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ActionsDiv = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const MainViewDiv = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 3px;
`;

const SelectFileDiv = styled.div`
  display: flex;
  gap: 5px;
`;

export const FileViewer = ({ files, hideActions = false }) => {
  //files = [{src: URL.createObjectURL(...), name: "fileName"},...]
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  useEffect(() => {
    return () => {
      setActiveFileIndex(0);
    };
  }, [files]);

  const handleChange = (event) => {
    const value = event.target.value;
    const selectedFileIndex = files.findIndex((el) => el.name === value);
    setActiveFileIndex(selectedFileIndex);
  };

  return files.length > 0 ? (
    <Container>
      <MainViewDiv>
        <MainView file={files[activeFileIndex]} />
      </MainViewDiv>
      <SelectFileDiv>
        <label>Odaberi fajl:</label>
        <select value={files[activeFileIndex].name} onChange={handleChange}>
          {files.map((file) => {
            return (
              <option value={file.name} key={file.src}>
                {file.name.split('/').pop()}
              </option>
            );
          })}
        </select>
      </SelectFileDiv>
      {!hideActions && (
        <ActionsDiv>
          <OpenInNewTab activeFile={files[activeFileIndex]} />
          <Download activeFile={files[activeFileIndex]} />
        </ActionsDiv>
      )}
    </Container>
  ) : null;
};

export default FileViewer;
