import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../components/buttons/Button';
import colors from '../../../../../theme/colors';

const MorePostsDiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const MorePostsButton = styled(Button)`
  background: ${colors.background};
  border: 1px solid ${colors.filteri};
  color: ${colors.filteri};

  :hover {
    background: ${colors.filteri};
    border: 1px solid ${colors.background};
    color: ${colors.background};
  }
`;

const MorePosts = React.forwardRef(({ onClick }, ref) => {
  return (
    <MorePostsDiv onClick={onClick}>
      <MorePostsButton ref={ref}>Učitaj još...</MorePostsButton>
    </MorePostsDiv>
  );
});

export default MorePosts;
