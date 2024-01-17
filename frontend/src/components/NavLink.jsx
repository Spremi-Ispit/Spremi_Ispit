import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  text-decoration: none;
  color: ${({ $color }) => $color ?? 'black'};

  :hover {
    text-decoration: underline;
    color: ${({ $color }) => $color ?? 'black'};
  }
`;
