import React from 'react';
import styled from 'styled-components';
import YearOfStudy from './components/YearOfStudy';
import Department from './components/Department';
import Subject from './components/Subject';
import Type from './components/Type';
import YearOfExam from './components/YearOfExam';
import ExaminationPeriod from './components/ExaminationPeriod';
import Order from './components/Order';
import { screensCSS } from '../../../../utils/useScreens';

const FiltersDiv = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  margin-bottom: 20px;
`;
const FiltersHeaderDiv = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
`;
const FiltersContainerDiv = styled.div`
  display: flex;
  gap: 20px;

  @media ${screensCSS.tablet} {
    display: grid;
    grid-template-columns: 100px 100px 100px;
  }
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
        <Order />
      </FiltersContainerDiv>
    </FiltersDiv>
  );
};

export default Filters;
