import styled from 'styled-components';
import Chip from '@mui/material/Chip';

export const StyledChip = styled(Chip)`
  && {
    cursor: default;
    background: var(--primary-color);
    color: white;
    margin-right: 4px;

    :hover {
      background: var(--primary-color);
      color: white;
      margin-right: 4px;
    }
  }
`;
