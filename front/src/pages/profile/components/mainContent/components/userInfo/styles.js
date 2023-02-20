import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';

export const StyledFormControl = styled(FormControl)`
  && {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const ContentContainer = styled.div`
  min-width: 230px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  && {
    margin-top: 10px;
  }
`;
