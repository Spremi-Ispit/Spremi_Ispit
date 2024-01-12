import React, { useState } from 'react';
import styled from 'styled-components';
import YearOfStudy from './components/YearOfStudy';
import Department from './components/Department';
import Subject from './components/Subject';
import Type from './components/Type';
import YearOfExam from './components/YearOfExam';
import ExaminationPeriod from './components/ExaminationPeriod';
import Order from './components/Order';
import { screensCSS } from '../../../../utils/useScreens';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FiltersDiv = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  margin-bottom: 20px;
  box-shadow: rgb(185, 185, 185) -1px 2px 9px 1px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 3px;
  padding: 10px;
`;
const FiltersHeaderDiv = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FiltersContainerDiv = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 170px 170px 170px 170px;
  gap: 25px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media ${screensCSS.tablet} {
    display: grid;
    grid-template-columns: 150px 150px 150px;
  }
`;

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  ${({ $filtersVisible }) => $filtersVisible && 'transform: rotateX(180deg);'}
  cursor: pointer;
`;

const Filters = () => {
  const [filtersVisible, setFiltersVisible] = useState(true);

  return (
    <FiltersDiv>
      <FiltersHeaderDiv>
        Detaljna pretraga{' '}
        <StyledExpandMoreIcon
          $filtersVisible={filtersVisible}
          onClick={() => setFiltersVisible((prev) => !prev)}
        />
      </FiltersHeaderDiv>
      {filtersVisible && (
        <FiltersContainerDiv>
          <YearOfStudy />
          <Department />
          <Subject />
          <Type />
          <ExaminationPeriod />
          <YearOfExam />
          <Order />
        </FiltersContainerDiv>
      )}
    </FiltersDiv>
  );
};

export default Filters;
