import React from 'react';
import styled from 'styled-components';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Typography from '@mui/material/Typography';
import image from '../../../assets/Logo.jpg';
import { screensCSS } from '../../../utils/useScreens';

const StyledTypography = styled(Typography)`
  margin-left: 10px;
  align-self: center;
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
        <FormatQuoteIcon fontSize="large" />
        Deljenje znanja predstavlja osnovni čin prijateljstva. Zato što je to
        način da nešto date, bez da bilo šta izgubite. - Richard Stallman
      </StyledTypography>
    </MotivationContainer>
  );
};

export default Motivation;
