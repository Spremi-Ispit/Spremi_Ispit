import React, { useRef } from 'react';
import styled from 'styled-components';
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Tooltip from '@mui/material/Tooltip';

const Link = styled.a`
  text-decoration: underline;
  color: #0000ee;
  margin-left: 10px;
  cursor: pointer;
`;

const ButtonDiv = styled.div`
  margin: 10px;

  :hover {
    cursor: pointer;
  }
`;

const ActionsDiv = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const Actions = ({ activeFile }) => {
  const downloadRef = useRef(null);
  const openRef = useRef(null);

  return (
    <ActionsDiv>
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
      <Tooltip title="Open file in new tab">
        <ButtonDiv onClick={() => openRef.current.click()}>
          <OpenInNewIcon color="action" />
        </ButtonDiv>
      </Tooltip>
      <Link
        onClick={() => window.open(activeFile.src)}
        style={{ display: 'none' }}
        ref={openRef}
      />
    </ActionsDiv>
  );
};

export default Actions;
