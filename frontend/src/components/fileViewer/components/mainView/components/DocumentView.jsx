import React from 'react';
import styled from 'styled-components';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

const FileContainer = styled.div`
  border-radius: 10px;
  position: relative;
  height: 100%;
`;

const DocumentView = ({ file }) => {
  return (
    <FileContainer>
      <DocViewer
        documents={[{ uri: file.src, fileName: file.name }]}
        pluginRenderers={DocViewerRenderers}
        config={{
          header: {
            disableHeader: true,
            disableFileName: true,
            retainURLParams: false,
          },
        }}
      />
    </FileContainer>
  );
};

export default DocumentView;
