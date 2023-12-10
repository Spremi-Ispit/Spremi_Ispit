import React from 'react';
import GoogleIcon from '../../../../../assets/auth/Google.png';
import styled from 'styled-components';
import Button from '../../../../../components/buttons/Button';

const StyledButton = styled(Button)`
  && {
    margin-right: 20px;
  }
`;

const StyledImg = styled.img`
  margin-right: 20px;
`;

export const Goole = () => {
  return (
    <StyledButton size="large" variant="outlined">
      <StyledImg alt="" src={GoogleIcon} height={30} width={20} />
      Registruj me
    </StyledButton>
  );
};

export default Goole;
