import React from 'react';
import OutlookIcon from '../../../../../assets/auth/Outlook.png';
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

export const Outlook = () => {
  return (
    <StyledButton size="large" variant="outlined">
      <StyledImg alt="" src={OutlookIcon} height={30} width={20} />
      Prijavi me
    </StyledButton>
  );
};

export default Outlook;
