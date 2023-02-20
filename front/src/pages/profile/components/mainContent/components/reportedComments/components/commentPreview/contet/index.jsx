import React from 'react';
import { StyledText, ContentContainer } from './styles';
import { FileViewer } from '../../../../../../../../../components/fileViewer';

const Content = (props) => {
  const { text, files } = props;
  return (
    <ContentContainer>
      <FileViewer
        files={files.map((file) => ({
          src: process.env.REACT_APP_BASE_URL + '/files/' + file.path, //'http://localhost:4000/files/1.png' or .../1.pdf
          name: file.path, //'1.png' or '1.pdf'
        }))}
      />
      <StyledText>{text}</StyledText>
    </ContentContainer>
  );
};

export default Content;
