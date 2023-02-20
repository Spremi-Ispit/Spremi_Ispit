import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const ControllsText = styled(Typography)`
  && {
    text-transform: none;
  }
`;

export const StyledPaper = styled(Paper)`
  && {
    padding: 10px;
    margin-bottom: 30px;
    min-height: 150px;
    border: 0.5px solid #c9cace;
  }
`;

export const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  font-size: 1rem;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  margin-bottom: 10px;
  padding: 10px;
`;

export const ControllsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled(Button)`
  && {
    margin-left: 10px;
  }
`;

export const ErrorHolder = styled.p`
  width: 100%;
  text-align: center;
  color: red;
  display: ${(props) => (props.exists ? 'block' : 'none')};

  > span {
    text-decoration: underline;
    cursor: pointer;
    color: red;
  }
`;
