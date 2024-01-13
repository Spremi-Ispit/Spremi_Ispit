import React from 'react';
import styled from 'styled-components';
import colors from '../../../theme/colors';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const BountyDiv = styled.div`
  display: flex;
  justify-content: center;
  background: ${colors.footer};
`;

const Bounty = () => {
  return (
    <BountyDiv>
      Prvih 5 rangiranih studenata (ne vazi za korisnika ADMIN) dobice 1000
      dinara!
      <CreditScoreIcon />
    </BountyDiv>
  );
};

export default Bounty;
