import React from 'react';
import styled from 'styled-components';
import YearOfStudy from './components/YearOfStudy';
import Department from './components/Department';
import Subject from './components/Subject';
import Type from './components/Type';
import ExaminationPeriod from './components/ExaminationPeriod';
import YearOfExam from './components/YearOfExam';
import PropTypes from 'prop-types';
import { filtersVariant } from './enums';

const FiltersContainer = styled.div``;

/** @param {Filters.propTypes} props */
export const Filters = ({ variant }) => {
  return (
    <FiltersContainer>
      <YearOfStudy variant={variant} />
      <Department variant={variant} />
      <Subject variant={variant} />
      <Type variant={variant} />
      <ExaminationPeriod variant={variant} />
      <YearOfExam variant={variant} />
    </FiltersContainer>
  );
};

Filters.propTypes = {
  variant: PropTypes.string,
};

Filters.defaultProps = {
  variant: filtersVariant.filled,
};

export default Filters;
