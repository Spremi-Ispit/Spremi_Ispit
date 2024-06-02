import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { selectSettingsSidePanelVisible } from '../../../redux/app/selectors';
import { appActions } from '../../../redux/app/slice';
import { useRedux } from '../../../redux/useRedux';

const StyledMenuIcon = styled(MenuIcon)`
  color: white;
  margin-right: 10px;
  cursor: pointer;
`;

const SettingsSidePanelMenu = () => {
  const sidePanelVisible = useSelector(selectSettingsSidePanelVisible);
  const setSettingsSidePanelVisible = useRedux(
    appActions.setSettingsSidePanelVisible
  );

  const handleClick = () => {
    setSettingsSidePanelVisible(!sidePanelVisible);
  };

  return (
    <>
      <StyledMenuIcon fontSize="large" onClick={handleClick} />
    </>
  );
};

export default SettingsSidePanelMenu;
