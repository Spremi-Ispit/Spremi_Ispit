import React, { useState } from 'react';
import styled from 'styled-components';
import YearOfStudy from './components/YearOfStudy';
import Department from './components/Department';
import Subject from './components/Subject';
import Type from './components/Type';
import YearOfExam from './components/YearOfExam';
import ExaminationPeriod from './components/ExaminationPeriod';
import Order from './components/Order';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CommentedPosts from './components/CommentedPosts';

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
  cursor: pointer;
  margin-bottom: 10px;
`;

const FiltersContainerDiv = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 170px 170px 170px 170px;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 150px 150px 150px;
  }

  @media (max-width: 560px) {
    display: grid;
    grid-template-columns: 150px 150px;
  }
`;

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  ${({ $filtersVisible }) => $filtersVisible && 'transform: rotateX(180deg);'}
`;

const Filters = () => {
  const [filtersVisible, setFiltersVisible] = useState(true);

  return (
    <FiltersDiv>
      {/* <FiltersHeaderDiv onClick={() => setFiltersVisible((prev) => !prev)}>
        Detaljna pretraga
        <StyledExpandMoreIcon $filtersVisible={filtersVisible} />
      </FiltersHeaderDiv> */}
      {filtersVisible && (
        <FiltersContainerDiv>
          <YearOfStudy />
          <Department />
          <Subject />
          <CommentedPosts />
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
