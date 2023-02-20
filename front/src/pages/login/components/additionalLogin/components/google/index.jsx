import React from "react";
import GoogleIcon from "../../../../../../assets/Google.png";
import { StyledButton, StyledImg } from "./styles";

const Goole = () => {

  return (
    <StyledButton size="large" variant="outlined">
      <StyledImg
        alt=""
        src={GoogleIcon}
        height={30}
        width={20}
      />
      Prijavi me
    </StyledButton>
  );
};

export default Goole;

