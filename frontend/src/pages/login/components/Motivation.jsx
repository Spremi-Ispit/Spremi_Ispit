import React from 'react';
import styled from 'styled-components';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Typography from '@mui/material/Typography';
import image from '../../../assets/Logo.jpg';
import { screensCSS } from '../../../utils/useScreens';

const StyledTypography = styled(Typography)`
  margin-left: 10px;
  align-self: center;
  font-family: Poppins;
  font-weight: 600;
  font-size: 30px;
  box-shadow: inset 2px -1px 10px 1px #a5a4a4;
  font-style: italic;
`;

const MotivationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLogoImg = styled.img`
  height: 300px;
  width: 300px;

  @media ${screensCSS.tablet} {
    height: 100px;
    width: 100px;
  }
`;

const Motivation = () => {
  return (
    <MotivationContainer>
      <StyledLogoImg src={image} alt="Smiley face" />
      <StyledTypography variant="h5" display="inline">
        {/* <FormatQuoteIcon fontSize="large" /> */}
        Znanje se povećava kada se deli, ne kada se čuva. - Kamari aka Lyrikal
      </StyledTypography>
    </MotivationContainer>
  );
};

export default Motivation;
