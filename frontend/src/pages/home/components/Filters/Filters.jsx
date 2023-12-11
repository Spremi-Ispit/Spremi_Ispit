import React from 'react';
import styled from 'styled-components';
import YearOfStudy from './components/YearOfStudy';
import Department from './components/Department';
import Subject from './components/Subject';
import Type from './components/Type';
import YearOfExam from './components/YearOfExam';
import ExaminationPeriod from './components/ExaminationPeriod';

const FiltersDiv = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;
const FiltersHeaderDiv = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
`;
const FiltersContainerDiv = styled.div`
  display: flex;
  gap: 20px;
`;

const Filters = () => {
  return (
    <FiltersDiv>
      <FiltersHeaderDiv>Detaljna pretraga </FiltersHeaderDiv>

      <FiltersContainerDiv>
        <YearOfStudy />
        <Department />
        <Subject />
        <Type />
        <ExaminationPeriod />
        <YearOfExam />
      </FiltersContainerDiv>
    </FiltersDiv>
  );
};

export default Filters;
