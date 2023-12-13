import React from 'react';
import Button from '../../buttons/Button';
import styled from 'styled-components';
import NavLink from './components/NavLink';
import { createPostRoute } from '../../../router/routes';
import colors from '../../../theme/colors';

const StyledButton = styled(Button)`
  text-transform: uppercase;
  font-size: small;
  font-weight: bold;
  background-color: ${colors.background};
  color: black;

  :hover {
    background-color: ${colors.filteri};
    color: white;
  }
`;

const CreatePost = () => {
  return (
    <NavLink to={`${createPostRoute}`}>
      <StyledButton>Kreiraj objavu</StyledButton>
    </NavLink>
  );
};

export default CreatePost;
