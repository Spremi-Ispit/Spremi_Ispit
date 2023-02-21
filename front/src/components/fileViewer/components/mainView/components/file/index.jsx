import React from 'react';
import { FileContainer } from './styles';
import Viewer from 'react-file-viewer';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import { selectWordDocuments } from '../../../../../../utils/filesSelector';

export const FileView = ({ file }) => {
  // file = {src: URL.createObjectURL(...), name: "fileName"}

  if (selectWordDocuments([file]).length > 0) {
    return (
      <FileContainer>
        <Viewer fileType={file.name.split('.')[1]} filePath={file.src} />
      </FileContainer>
    );
  }

  return (
    <FileContainer>
      <DocViewer
        documents={[{ uri: file.src, fileName: file.name }]}
        pluginRenderers={DocViewerRenderers}
      />
    </FileContainer>
  );
};
