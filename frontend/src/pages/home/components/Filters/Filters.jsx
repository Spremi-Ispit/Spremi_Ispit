import React from 'react';
import styled from 'styled-components';
import YearOfStudy from './components/YearOfStudy';
import Department from './components/Department';

const FiltersDiv = styled.div``;
const FiltersHeaderDiv = styled.div`
  text-transform: uppercase;
  font-weight: bold;
`;
const FiltersContainerDiv = styled.div`
  display: flex;
`;

const Filters = () => {
  return (
    <FiltersDiv>
      <FiltersHeaderDiv>Detaljna pretraga</FiltersHeaderDiv>
      <FiltersContainerDiv>
        <YearOfStudy />
        <Department />
      </FiltersContainerDiv>
    </FiltersDiv>
  );
};

export default Filters;
