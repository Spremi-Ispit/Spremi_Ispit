import React, { useRef } from 'react';
import styled from 'styled-components';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';

const ButtonDiv = styled.div`
  margin: 10px;

  :hover {
    cursor: pointer;
  }
`;

const Download = ({ activeFile }) => {
  const downloadRef = useRef(null);

  return (
    <>
      <Tooltip title="Download">
        <ButtonDiv onClick={() => downloadRef.current.click()}>
          <DownloadIcon color="action" />
        </ButtonDiv>
      </Tooltip>
      <a
        href={activeFile.src}
        download
        style={{ display: 'none' }}
        ref={downloadRef}
      />
    </>
  );
};

export default Download;
