import styled from 'styled-components';
import Chip from '@mui/material/Chip';

export const TagsContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-width: 200px;
  flex: 1;
`;

export const StyledChip = styled(Chip)`
  &.MuiChip-root {
    margin: 2px;
  }
`;
