import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styled from 'styled-components';
import NavLink from '../../../../components/NavLink';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { internshipsRoute } from '../../../../router/routes';

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

const LookingForInternshipDiv = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

const Internship = () => {
  return (
    <InternshipLinkDiv>
      <LookingForInternshipDiv>
        Tražiš praksu?
        <ArrowRightAltIcon />
      </LookingForInternshipDiv>
      <StyledNavlink to={internshipsRoute}>
        @Prakse
        <ApartmentIcon />
      </StyledNavlink>
    </InternshipLinkDiv>
  );
};

export default Internship;
