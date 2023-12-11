import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppActions } from '../../../redux/useAppActions';
import { selectFiltersVisible } from '../../../redux/home/selectors';
import { useSelector } from 'react-redux';

const StyledMenuIcon = styled(MenuIcon)`
  color: white;
  margin-right: 10px;
  cursor: pointer;
`;

const Menu = () => {
  const { homeActions } = useAppActions();
  const { setFiltersVisible } = homeActions;
  const filtersVisible = useSelector(selectFiltersVisible);

  const handleClick = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <>
      <StyledMenuIcon fontSize="large" onClick={handleClick} />
    </>
  );
};

export default Menu;
