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
      Prvih 5 rangiranih studenata (po broju lajkova) dobice 1000 dinara!
      <CreditScoreIcon />
    </BountyDiv>
  );
};

export default Bounty;
