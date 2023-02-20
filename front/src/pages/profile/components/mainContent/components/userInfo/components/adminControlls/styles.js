import { Button } from '@mui/material';
import styled from 'styled-components';

export const AdminControllsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const StyledDeleteForeverButton = styled(Button)`
  && {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
