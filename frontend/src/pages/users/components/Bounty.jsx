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
  return <BountyDiv></BountyDiv>;
};

export default Bounty;
