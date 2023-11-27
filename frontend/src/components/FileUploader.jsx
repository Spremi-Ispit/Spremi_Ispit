import React, { createRef } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Button } from '../components/buttons/Button';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { supporetdTypes } from '../utils/managers/FilesSelector';

const StyledButton = styled(Button)`
  padding-left: 0px;
  margin-top: 10px;
  margin-left: -5px;
`;

const StyledDeleteButton = styled(Button)`
  && {
    margin-left: 10px;
  }
`;

const UploadContainer = styled.div`
  margin-bottom: 10px;
`;

export const FileUploader = ({ setFiles, files }) => {
  const inputRef = createRef();

  const onInputChange = (e) => {
    let uploadedFiles = Array.from(e.target.files);
    inputRef.current.value = '';
    const alreadyUploadedFile = files.find((file) =>
      uploadedFiles.find((uploadedFile) => uploadedFile.name === file.name)
    );

    if (alreadyUploadedFile) {
      alert(`Upload failed, file ${alreadyUploadedFile.name} already exists`);
    } else {
      setFiles((prev) => [...prev, ...uploadedFiles]);
    }
  };

  return (
    <UploadContainer>
      <StyledButton onClick={() => inputRef.current.click()}>
        <AttachFileIcon /> Dodaj prilog...
      </StyledButton>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={onInputChange}
        accept={`${Object.values(supporetdTypes)
          .map((type) => `.${type}`)
          .toString()}`}
        multiple="multiple"
      />
      {files.length > 0 ? (
        <StyledDeleteButton
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => setFiles([])}
        >
          Obriši prilog
        </StyledDeleteButton>
      ) : null}
    </UploadContainer>
  );
};

export default FileUploader;
