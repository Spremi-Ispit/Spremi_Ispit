import React from "react";
import OutlookIcon from "../../../../../../assets/Outlook.png";
import { StyledButton, StyledImg } from "./styles";

const Outlook = () => {

  return (
    <StyledButton size="large" variant="outlined">
      <StyledImg
        alt=""
        src={OutlookIcon}
        height={30}
        width={20}
      />
      Prijavi me
    </StyledButton>
  );
};

export default Outlook;

