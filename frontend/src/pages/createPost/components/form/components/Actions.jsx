import React from 'react';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Button from '../../../../../components/buttons/Button';

const ControllsText = styled(Typography)`
  && {
    text-transform: none;
  }
`;

const ControllsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled(Button)`
  && {
    margin-left: 10px;
  }
`;

const CancelButton = styled(Button)`
  && {
    margin-right: 10px;
  }
`;

export const Actions = ({ onSubmit, onCancel, uploading }) => {
  return (
    <ControllsContainer>
      <CancelButton onClick={onCancel} variant="outlined">
        <ControllsText variant="button" color="inherit">
          Odustani
        </ControllsText>
      </CancelButton>
      <SubmitButton onClick={onSubmit} variant="outlined" disabled={uploading}>
        <ControllsText variant="button" color="inherit">
          Potvrdi
        </ControllsText>
      </SubmitButton>
    </ControllsContainer>
  );
};

export default Actions;
