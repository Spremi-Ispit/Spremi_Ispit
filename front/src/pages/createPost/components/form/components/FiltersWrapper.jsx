import React from 'react';
import styled from 'styled-components';
import { Filters } from '../../../../../components/filters/Fliters';
import { filtersVariant } from '../../../../../components/filters/filtersVariant';

const FiltersWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  padding-right: 10px;
  color: white;
  min-width: 350px;
`;

export const FiltersWrapper = () => {
  return (
    <FiltersWrapperDiv>
      <Filters variant={filtersVariant.standard} />
    </FiltersWrapperDiv>
  );
};

export default FiltersWrapper;
