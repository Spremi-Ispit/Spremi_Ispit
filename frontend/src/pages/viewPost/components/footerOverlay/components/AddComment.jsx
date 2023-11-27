import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { loginRoute } from '../../../../../router/routes';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../../../redux/app/selectors';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)`
  && {
    background-color: var(--primary);
  }
`;

const AddCommentDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const AddComment = React.forwardRef((props, ref) => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const handleCreateComment = () => {
    if (token) {
      ref.current.scrollIntoView();
    } else {
      navigate(loginRoute);
    }
  };

  return (
    <AddCommentDiv>
      <StyledButton
        variant="contained"
        onClick={handleCreateComment}
        endIcon={<ArrowDownwardIcon />}
      >
        komentar
      </StyledButton>
    </AddCommentDiv>
  );
});
