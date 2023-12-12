import React from 'react';
import styled from 'styled-components';
import colors from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const Button = styled.button`
  background: none;
  border: none;
  background-color: ${colors.button};
  color: white;
  white-space: nowrap;
  cursor: pointer;

  :hover {
    background-color: ${colors.buttonHover};
  }

  background-color: ${({ $disabled }) => $disabled && colors.buttonDisabled};
  padding: 8px 12px;
  border-radius: 5%;
  transition: 0.3s;
  ${fonts(12, 400)}
`;

export default Button;
