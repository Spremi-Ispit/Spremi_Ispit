import React from 'react';
import styled from 'styled-components';
import YearOfStudy from './components/YearOfStudy';
import Department from './components/Department';
import Subject from './components/Subject';
import Type from './components/Type';
import ExaminationPeriod from './components/ExaminationPeriod';
import YearOfExam from './components/YearOfExam';

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  padding-right: 10px;
  color: white;
  min-width: 350px;
`;

export const Filters = () => {
  return (
    <FiltersContainer>
      <YearOfStudy />
      <Department />
      <Subject />
      <Type />
      <ExaminationPeriod />
      <YearOfExam />
    </FiltersContainer>
  );
};

export default Filters;
