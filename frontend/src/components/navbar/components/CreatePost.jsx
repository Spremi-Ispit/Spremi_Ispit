import React from 'react';
import styled from 'styled-components';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Button from '../../buttons/Button';
import NavLink from './components/NavLink';
import { createPostRoute } from '../../../router/routes';
import colors from '../../../theme/colors';
import { screens, useScreens } from '../../../utils/useScreens';

const StyledPostAddIcon = styled(PostAddIcon)``;

const StyledButton = styled(Button)`
  font-size: small;
  font-weight: bold;
  background-color: ${colors.background};
  color: black;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const StyledNavLink = styled(NavLink)`
  :hover {
    text-decoration: none;
  }
`;

const CreatePost = () => {
  const screen = useScreens();

  return (
    <StyledNavLink to={createPostRoute}>
      {
        <StyledButton>
          {screen > screens.tablet && 'Kreiraj objavu'} <StyledPostAddIcon />
        </StyledButton>
      }
    </StyledNavLink>
  );
};

export default CreatePost;
