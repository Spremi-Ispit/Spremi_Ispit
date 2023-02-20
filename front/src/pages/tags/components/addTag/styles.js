import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
  && {
    margin-top: 10px;
  }
`;

export const Container = styled.div`
  padding-bottom: 50px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  width: 40%;
  align-items: center;

  @media (max-width: 650px) : {
    width: 90%;
  }
`;
