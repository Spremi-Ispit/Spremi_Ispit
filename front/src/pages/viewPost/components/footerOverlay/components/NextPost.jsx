import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useAppActions } from '../../../../../redux/useAppActions';
import { useUrlManager } from '../../../../../utils/managers/UrlManager';

const StyledButton = styled(Button)`
  && {
    background: var(--primary);
    color: white;
    width: 134px;
    :hover {
      background: var(--secondary);
    }
  }
`;

export const NextPost = () => {
  const { viewPostActions } = useAppActions();
  const { setNextPost } = viewPostActions;
  const urlManager = useUrlManager();
  const { urlOrder } = urlManager.getParams();

  const handleNextPost = () => {
    setNextPost(true);
  };

  if (urlOrder) {
    return (
      <StyledButton variant="outlined" onClick={handleNextPost}>
        sledeća »
      </StyledButton>
    );
  }

  return null;
};

export default NextPost;
