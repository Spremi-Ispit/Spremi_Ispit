import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  text-decoration: none;
  color: white;
  :hover {
    text-decoration: underline;
    color: white !important;
  }
  margin: 10px;
`;
