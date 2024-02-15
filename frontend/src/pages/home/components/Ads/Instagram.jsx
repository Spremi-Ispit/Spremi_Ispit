import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styled from 'styled-components';
import InstagramImgSrc from '../../../../assets/instagram.png';
import NavLink from '../../../../components/NavLink';

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

const InstagramLinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  padding: 5px;
  border-radius: 5px;
`;

const InstagramImg = styled.img`
  width: 20px;
`;

const FollowUsDiv = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

const Instagram = () => {
  return (
    <InstagramLinkDiv>
      <FollowUsDiv>
        Zaprati nas
        <ArrowRightAltIcon />
      </FollowUsDiv>
      <StyledNavlink
        as="a"
        href="https://www.instagram.com/spremiispit/"
        target="_blank"
      >
        @SpremiIspit
        <InstagramImg src={InstagramImgSrc} alt="Follow Us On Instagram" />
      </StyledNavlink>
    </InstagramLinkDiv>
  );
};

export default Instagram;
