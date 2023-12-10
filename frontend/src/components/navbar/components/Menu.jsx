import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

const StyledMenuIcon = styled(MenuIcon)`
  color: white;
  margin: 0px 20px;
`;

const Menu = () => {
  return <StyledMenuIcon fontSize="large" />;
};

export default Menu;
