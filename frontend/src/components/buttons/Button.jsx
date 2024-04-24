import React from 'react';
import styled from 'styled-components';
import colors from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const Button = styled.button`
  background: none;
  border: none;
  background-color: ${colors.filteri};
  color: white;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    color: ${({ $disabled }) => !$disabled && 'black'};
    background-color: ${({ $disabled }) => !$disabled && colors.button};
  }

  background-color: ${({ $disabled }) => $disabled && colors.buttonDisabled};
  padding: 8px 12px;
  border-radius: 5%;
  transition: 0.3s;
  ${fonts(16, 400)}
`;

export default Button;
