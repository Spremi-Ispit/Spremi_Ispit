import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
  && {
    margin: 10px;
  }
`;

export const QuoteContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FormContainer = styled.div`
  text-align: center;
  width: 50%;
  margin-top: -60px;
`;

export const FormHeading = styled(Typography)`
  margin-left: 10px;
  color: black;
`;

export const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 30px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  border: 0.5px solid;
  background-color: #cccccc;
  align-items: center;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  && {
    margin-top: 10px;
  }
`;
