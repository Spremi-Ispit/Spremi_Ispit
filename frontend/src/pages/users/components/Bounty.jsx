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
      1000 dinara! (ne vazi za korisnika ADMIN)
    </BountyDiv>
  );
};

export default Bounty;
