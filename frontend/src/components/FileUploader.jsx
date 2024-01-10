import React, { createRef } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Button } from '../components/buttons/Button';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
// import { supporetdTypes } from '../utils/managers/FilesSelector';

const UplaodAttachmentsButton = styled(Button)`
  padding-left: 0px;
`;

const DeleteAttachemtsButton = styled(Button)`
  && {
    margin-left: 10px;
  }
`;

const FileUploaderDiv = styled.div`
  margin: 10px 0px;
  display: flex;
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
    <FileUploaderDiv>
      <UplaodAttachmentsButton onClick={() => inputRef.current.click()}>
        <AttachFileIcon /> Dodaj prilog...
      </UplaodAttachmentsButton>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={onInputChange}
        // accept={`${Object.values(supporetdTypes)
        //   .map((type) => `.${type}`)
        //   .toString()}`}
        multiple="multiple"
      />
      {files.length > 0 ? (
        <DeleteAttachemtsButton
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => setFiles([])}
        >
          Obriši prilog
        </DeleteAttachemtsButton>
      ) : null}
    </FileUploaderDiv>
  );
};

export default FileUploader;
