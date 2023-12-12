import React, { useRef } from 'react';
import styled from 'styled-components';
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

const OpenInNewTab = ({ activeFile }) => {
  const openRef = useRef(null);

  return (
    <>
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
    </>
  );
};

export default OpenInNewTab;
