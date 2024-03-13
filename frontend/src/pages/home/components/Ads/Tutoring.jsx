import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styled from 'styled-components';
// import TutoringImgSrc from '../../../../assets/Tutoring.png';
import NavLink from '../../../../components/NavLink';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { tutoringRoute } from '../../../../router/routes';

const StyledNavlink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 18px;
  text-decoration: none;

  color: #535cb5;
  :hover {
    color: #333da8;
  }
`;

const TutoringLinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  padding: 5px;
  border-radius: 5px;
`;

const FollowUsDiv = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

const Tutoring = () => {
  return (
    <TutoringLinkDiv>
      <FollowUsDiv>
        Privatni časovi?
        <ArrowRightAltIcon />
      </FollowUsDiv>
      <StyledNavlink to={tutoringRoute}>
        @Nastava
        <MenuBookIcon />
      </StyledNavlink>
    </TutoringLinkDiv>
  );
};

export default Tutoring;
