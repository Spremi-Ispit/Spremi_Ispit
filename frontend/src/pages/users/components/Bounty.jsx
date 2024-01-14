import React from 'react';
import styled from 'styled-components';
import colors from '../../../theme/colors';

const BountyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: ${colors.footer};
`;

const Bounty = () => {
  return (
    <BountyDiv>
      Na kraju januraskog ispitnog roka, prvih 5 rangiranih studenata dobice
      2000 dinara!
    </BountyDiv>
  );
};

export default Bounty;
