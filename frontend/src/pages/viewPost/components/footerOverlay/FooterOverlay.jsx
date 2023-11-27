import React from 'react';
import { AddComment } from './components/AddComment';
import styled from 'styled-components';
import PrevPost from './components/PrevPost';
import NextPost from './components/NextPost';

const FooterOverlayDiv = styled.div`
  position: fixed;
  bottom: 0;
  background-color: var(--background);
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  padding: 6px;
  border-top: 1px solid #c9cace;
`;

export const FooterOverlay = React.forwardRef((props, ref) => {
  return (
    <FooterOverlayDiv>
      <PrevPost />
      <AddComment ref={ref} />
      <NextPost />
    </FooterOverlayDiv>
  );
});

export default FooterOverlay;
