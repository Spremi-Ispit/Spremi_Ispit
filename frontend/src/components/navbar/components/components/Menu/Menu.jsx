import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

const StyledMenuIcon = styled(MenuIcon)`
  color: white;
  margin-right: 10px;
`;

const Menu = () => {
  return <StyledMenuIcon fontSize="large" />;
};

export default Menu;

// <About />
// <Wiki />
// <ReportBug />
// {role === 'admin' && <Users />}
// <Profile />
