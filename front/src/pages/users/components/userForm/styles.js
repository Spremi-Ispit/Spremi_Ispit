import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  // margin-top: 10px;
`;

export const ControllsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 10px;
  }
`;
