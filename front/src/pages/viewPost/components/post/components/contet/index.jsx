import React, { useEffect, useState } from 'react';
import { StyledArrowDownIcon, StyledFilesContainer } from './styles';
import { FileViewer } from '../../../../../../components/fileViewer';
import { useSelector } from 'react-redux';

const Content = (props) => {
  const { files } = props;
  const showAttachmentsForAll = useSelector(
    (state) => state.viewPost.showAttachments
  );
  const [showAttachments, setShowAttachments] = useState(showAttachmentsForAll);

  useEffect(() => {
    setShowAttachments(showAttachmentsForAll);
  }, [showAttachmentsForAll]);

  return (
    <>
      {files.length > 0 ? (
        <StyledFilesContainer showAttachments={showAttachments}>
          Fajlovi
          <StyledArrowDownIcon
            onClick={() => setShowAttachments((prev) => !prev)}
          />
        </StyledFilesContainer>
      ) : null}
      {showAttachments ? (
        <FileViewer
          files={files.map((file) => ({
            src: process.env.REACT_APP_BASE_URL + '/files/' + file.path, //'http://localhost:4000/files/1.png' or .../1.pdf
            name: file.path, //'1.png' or '1.pdf'
          }))}
        />
      ) : null}
    </>
  );
};

export default Content;
