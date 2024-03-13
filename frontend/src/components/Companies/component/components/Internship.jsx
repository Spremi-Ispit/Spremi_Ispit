import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styled from 'styled-components';
import NavLink from '../../../../components/NavLink';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ReactGA from 'react-ga4';

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

const InternshipLinkDiv = styled.div`
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

const Internship = ({ internship, name }) => {
  if (!internship) {
    return null;
  }

  const handleClick = () => {
    ReactGA.event({
      action: 'internship_click',
      category: name,
      label: internship,
      value: name,
    });
  };

  return (
    <InternshipLinkDiv>
      <FollowUsDiv>
        Link
        <ArrowRightAltIcon />
      </FollowUsDiv>
      <StyledNavlink
        as="a"
        href={internship}
        target="_blank"
        onClick={handleClick}
      >
        @Posao/Praksa
        <ApartmentIcon />
      </StyledNavlink>
    </InternshipLinkDiv>
  );
};

export default Internship;
