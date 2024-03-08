import React, { useEffect, useState } from 'react';
import Card from './component/Card';
import styled from 'styled-components';

const CompaniesDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const useCompaniesList = (companiesData) => {
  const [companiesList, setCompaniesList] = useState([]);

  const shuffleCompanies = () => {
    const companies = companiesData.map(
      ({ name, logo, tags, link, linkName, internship }) => (
        <Card
          key={name}
          name={name}
          logo={{
            src: logo,
            alt: `Logo kompanije ${name}`,
          }}
          tags={tags}
          link={link}
          linkName={linkName}
          internship={internship}
        />
      )
    );

    const shuffledCompanies = [];

    const n = companies.length;
    for (let i = 0; i < n; i++) {
      const index = Math.floor((Math.random() * 100) % companies.length);

      shuffledCompanies.push(
        React.cloneElement(...companies.splice(index, 1), { key: i })
      );
    }

    return shuffledCompanies;
  };

  useEffect(() => {
    setCompaniesList(shuffleCompanies());
  }, [companiesData]);

  return companiesList;
};

export const Companies = ({ companies }) => {
  const list = useCompaniesList(companies);

  return <CompaniesDiv>{list}</CompaniesDiv>;
};

export default Companies;
