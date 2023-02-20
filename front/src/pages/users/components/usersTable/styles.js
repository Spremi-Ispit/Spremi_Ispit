import { Button } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
`;

export const ControllsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledButton = styled(Button)`
  && {
    display: flex;
    justify-content: flex-start;
  }
`;
