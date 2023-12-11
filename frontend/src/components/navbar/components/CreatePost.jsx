import React from 'react';
import Button from '../../buttons/Button';
import styled from 'styled-components';
import NavLink from './components/NavLink';
import { createPostRoute } from '../../../router/routes';

const StyledButton = styled(Button)`
  text-transform: uppercase;
`;

const CreatePost = () => {
  return (
    <NavLink to={`${createPostRoute}`}>
      <StyledButton>Kreiraj objavu</StyledButton>
    </NavLink>
  );
};

export default CreatePost;
