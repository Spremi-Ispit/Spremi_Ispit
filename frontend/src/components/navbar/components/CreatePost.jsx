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
`;
const StyledNavLink = styled(NavLink)`
  :hover {
    text-decoration: none;
  }
`;

const CreatePost = () => {
  return (
    <StyledNavLink to={`${createPostRoute}`}>
      <StyledButton>Kreiraj objavu</StyledButton>
    </StyledNavLink>
  );
};

export default CreatePost;
