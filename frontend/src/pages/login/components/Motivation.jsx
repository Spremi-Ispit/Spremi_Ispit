import React from 'react';
import styled from 'styled-components';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Typography from '@mui/material/Typography';
import image from '../../../assets/Logo.jpg';
import { screensCSS } from '../../../utils/useScreens';

// const StyledTypography = styled(Typography)`
//   margin-left: 10px;
//   align-self: center;
//   font-family: Poppins;
//   font-weight: 600;
//   font-size: 30px;
//   // box-shadow: inset 2px -1px 10px 1px #a5a4a4;
//   font-style: italic;
//   // border-radius: 20px;
//   padding: 2%;
// `;

const StyledTypography = styled(Typography)`
  margin-left: 10px;
  align-self: center;
  font-family: Poppins;
  font-weight: 600;
  font-size: 18px;
  font-style: italic;
  padding: 2%;
`;

const MotivationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLogoImg = styled.img`
  height: 100px;
  width: 100px;

  @media ${screensCSS.tablet} {
    height: 100px;
    width: 100px;
  }
`;

const Motivation = () => {
  return (
    <MotivationContainer>
      <StyledLogoImg src={image} alt="Smiley face" />
      <StyledTypography variant="h6" display="inline">
        {/* <FormatQuoteIcon fontSize="large" /> */}
        Znanje se povećava kada se deli, ne kada se čuva. - Kamari aka Lyrikal
        {/* || Deljenje znanja predstavlja osnovni čin prijateljstva. Zato što je to
        način da nešto date, bez da bilo šta izgubite. - Richard Stallman */}
      </StyledTypography>
    </MotivationContainer>
  );
};

export default Motivation;
