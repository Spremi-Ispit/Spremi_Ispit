import React from 'react';
import styled from 'styled-components';
import { Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router';
import { createPostRoute } from '../../../router/routes';

const CreatePostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 50px 0px 50px;
`;

const CreatePostDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDivider = styled(Divider)`
  && {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-left: 10px;
    background-color: var(--primary);

    :hover {
      background-color: var(--secondary);
    }
  }
`;

const StyledH2 = styled.h2`
  text-align: center;
`;

export const CreatePost = () => {
  const navigate = useNavigate();

  return (
    <CreatePostDiv>
      <CreatePostContainer>
        <StyledH2>Imaš pitanje ili materijal?</StyledH2>
        <StyledButton
          variant="contained"
          onClick={() => navigate(createPostRoute)}
        >
          KREIRAJ OBJAVU
        </StyledButton>
      </CreatePostContainer>
      <StyledDivider />
    </CreatePostDiv>
  );
};

export default CreatePost;
