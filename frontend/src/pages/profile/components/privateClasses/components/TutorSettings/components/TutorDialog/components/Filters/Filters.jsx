import React from 'react';
import styled from 'styled-components';
import YearOfStudy from './components/YearOfStudy';
import Department from './components/Department';
import Subject from './components/Subject';
import Button from '../../../../../../../../../../components/buttons/Button';

const FiltersDiv = styled.div`
  display: flex;
  white-space: nowrap;
  box-shadow: rgb(185, 185, 185) -1px 2px 9px 1px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 3px;
  padding: 10px;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  max-height: 30px;
  align-self: end;
`;

const Filters = () => {
  return (
    <FiltersDiv>
      <YearOfStudy />
      <Department />
      <Subject />
      <StyledButton>Dodaj predmet</StyledButton>
    </FiltersDiv>
  );
};

export default Filters;
