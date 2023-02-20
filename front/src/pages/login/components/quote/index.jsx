import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { QuoteContainer, StyledTypography } from "./styles";

const Quote = () => {

  return (
    <QuoteContainer>
      <FormatQuoteIcon fontSize="large" />
      <StyledTypography variant="h5" display="inline">
        Znanje se povećava kada se deli, ne kada se čuva. - Kamari aka Lyrikal
      </StyledTypography>
    </QuoteContainer>
  );
};

export default Quote;
