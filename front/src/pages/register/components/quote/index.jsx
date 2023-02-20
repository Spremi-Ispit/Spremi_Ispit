import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { QuoteContainer, StyledTypography } from "./styles";

const Quote = () => {

  return (
    <QuoteContainer>
      <FormatQuoteIcon fontSize="large" />
      <StyledTypography variant="h5" display="inline">
        Deljenje znanja predstavlja osnovni čin prijateljstva. Zato što je to način da nešto date, bez da bilo šta izgubite. - Richard Stallman
      </StyledTypography>
    </QuoteContainer>
  );
};

export default Quote;
