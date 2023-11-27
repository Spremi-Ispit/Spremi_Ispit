import React from 'react';
import FileViewer from '../../../../../components/fileViewer/FileViewer';
import FileUploader from '../../../../../components/FileUploader';

export const Files = ({ files, setFiles }) => {
  return (
    <>
      <FileViewer
        files={files.map((attachment) => ({
          src: URL.createObjectURL(attachment),
          name: attachment.name,
        }))}
      />
      <FileUploader setFiles={setFiles} files={files} />
    </>
  );
};

export default Files;
