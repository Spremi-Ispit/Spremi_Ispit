import React from 'react';
import { useNavigate } from 'react-router-dom';
import { viewPostRoute } from '../../../../../../../router/routes';
import Button from '../../../../../../../components/buttons/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  && {
    margin-bottom: 30px;
    margin-left: 10px;
  }
`;

export const ShowPost = ({ postId }) => {
  const navigate = useNavigate();

  const handleShowPost = () => {
    navigate({
      pathname: viewPostRoute,
      search: `postId=${postId}`,
    });
  };

  return (
    <StyledButton variant="outlined" onClick={handleShowPost}>
      Prikaži objavu
    </StyledButton>
  );
};

export default ShowPost;
