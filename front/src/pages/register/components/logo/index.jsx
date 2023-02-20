import React from 'react';
import image from '../../../../assets/Logo.jpg';
import { LogoContainer } from './styles';

const Logo = () => {

  return (
    <LogoContainer>
        <img src={image} alt="Smiley face" height="300" width="300" />
    </LogoContainer>        

  );
}

export default Logo;