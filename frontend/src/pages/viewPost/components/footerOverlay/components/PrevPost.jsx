import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useAppActions } from '../../../../../redux/useAppActions';
import { useUrlManager } from '../../../../../utils/managers/UrlManager';

const StyledButton = styled(Button)`
  && {
    background: var(--primary);
    color: white;
    :hover {
      background: var(--secondary);
    }
  }
`;

export const PrevPost = () => {
  const { viewPostActions } = useAppActions();
  const { setPrevPost } = viewPostActions;
  const urlManager = useUrlManager();
  const { urlOrder } = urlManager.getParams();

  const handlePreviousPost = () => {
    setPrevPost(true);
  };

  if (urlOrder) {
    return (
      <StyledButton variant="outlined" onClick={handlePreviousPost}>
        prethodna «
      </StyledButton>
    );
  }

  return null;
};

export default PrevPost;
