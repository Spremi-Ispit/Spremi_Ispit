import React, { useState } from 'react';
import styled from 'styled-components';
import CompaniesList from '../../../../components/Companies/Companies';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ApartmentIcon from '@mui/icons-material/Apartment';
import companies from '../../../../components/Companies/data';

const CompaniesHeader = styled.h3`
  text-align: center;
`;

const CompaniesDiv = styled.div`
  display: flex;
  flex-direction: column;
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

const InternshipCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const Companies = () => {
  const [internship, setInternship] = useState(false);

  const companiesList = () => {
    if (internship) {
      return companies.filter((company) =>
        company.internship ? company : null
      );
    }
    return companies;
  };

  const handleChange = (e) => {
    setInternship(e.target.checked);
  };
  return (
    <CompaniesDiv>
      <CompaniesHeader>IT kompanije</CompaniesHeader>
      {/* <InternshipLinkDiv>
        <LookingForInternshipDiv>
          Tražiš praksu?
          <ArrowRightAltIcon />
        </LookingForInternshipDiv>
        <InternshipCheckbox
          type="checkbox"
          onChange={handleChange}
          checked={internship}
        />
        <ApartmentIcon />
      </InternshipLinkDiv> */}
      <CompaniesList companies={companiesList()} />
    </CompaniesDiv>
  );
};

export default Companies;
