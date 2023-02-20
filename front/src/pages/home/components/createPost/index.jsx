import React from 'react';
import { StyledButton } from './styles';
import { CreatePostContainer, StyledH2 } from './styles';
import { useNavigate } from 'react-router';
import { createPostRoute } from '../../../../app/router/routes';

const CreatePost = () => {
  const navigate = useNavigate();

  return (
    <CreatePostContainer>
      <StyledH2>Imaš pitanje ili materijal?</StyledH2>
      <StyledButton
        variant="contained"
        onClick={() => navigate(createPostRoute)}
      >
        KREIRAJ OBJAVU
      </StyledButton>
    </CreatePostContainer>
  );
};

export default CreatePost;
