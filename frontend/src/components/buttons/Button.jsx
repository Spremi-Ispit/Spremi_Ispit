import React from 'react';
import { Button as MUIButton } from '@mui/material';
import styled from 'styled-components';

export const Button = styled(MUIButton)`
  && {
    background-color: var(--primary);
    color: white;

    :hover {
      background-color: var(--secondary);
    }

    background-color: ${({ disabled }) => (disabled ? 'grey' : '')};
  }
`;

export default Button;
