import React from 'react';
import {
  AdditionalFiltersContainer,
  FiltersContainer,
  StyledDivider,
  StyledButtonResize,
} from './styles';
import SearchBar from './components/searchBar';
import Tags from './components/tags';
import Type from './components/type';
import Order from './components/order';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { setFiltersVisibility } from '../../redux/slices';
import { useDispatch, useSelector } from 'react-redux';

const Fliters = () => {
  const dispatch = useDispatch();
  const filtersVisibility = useSelector(
    (state) => state.home.filtersVisibility
  );

  return (
    <FiltersContainer>
      <StyledButtonResize
        onClick={() => dispatch(setFiltersVisibility(!filtersVisibility))}
        endIcon={
          filtersVisibility ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )
        }
      >
        Filteri
      </StyledButtonResize>
      {filtersVisibility ? (
        <>
          <SearchBar />
          <Tags />
          <AdditionalFiltersContainer>
            <Type />
            <Order />
          </AdditionalFiltersContainer>
          <StyledDivider />
        </>
      ) : null}
    </FiltersContainer>
  );
};

export default Fliters;
