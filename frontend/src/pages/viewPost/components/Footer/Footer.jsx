import React from 'react';
import { AddComment } from './components/AddComment';
import styled from 'styled-components';
import PrevPost from './components/PrevPost';
import NextPost from './components/NextPost';
import colors from '../../../../theme/colors';

const FooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  padding: 6px;
  border-top: 1px solid #c9cace;
  background: ${colors.background};
`;

const FooterPlaceholderDiv = styled.div`
  height: 50px;
`;

export const Footer = React.forwardRef((props, ref) => {
  return (
    <FooterPlaceholderDiv>
      <FooterDiv>
        <PrevPost />
        <AddComment ref={ref} />
        <NextPost />
      </FooterDiv>
    </FooterPlaceholderDiv>
  );
});

export default Footer;
