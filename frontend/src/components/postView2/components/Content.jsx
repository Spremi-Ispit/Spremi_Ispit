import React from 'react';
import styled from 'styled-components';
import FileViewer from '../../fileViewer/FileViewer';
import env from '../../../config/env';

const shortDescriptionStyle = `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
  word-break: break-all;
`;

const PostTitleContainer = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-left: 5px;
`;

const PostDescriptionContainer = styled.p`
  margin: 5px;
  width: 90%;
  flex: 1;

  ${({ shortDescription }) => shortDescription && shortDescriptionStyle}
`;

export const Content = (props) => {
  const { files, title, description, enableFiles, shortDescription } = props;

  const attachemnts = () => {
    if (enableFiles && files.length > 0) {
      return (
        <FileViewer
          files={files.map((file) => ({
            src: env.VITE_BACKEND_URL + '/files/' + file.path, //'http://localhost:4000/files/1.png' or .../1.pdf
            name: file.path, //'1.png' or '1.pdf'
          }))}
        />
      );
    }
  };

  return (
    <>
      <PostTitleContainer>{title}</PostTitleContainer>
      <PostDescriptionContainer shortDescription={shortDescription}>
        {description}
      </PostDescriptionContainer>
      {attachemnts()}
    </>
  );
};

export default Content;
