import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppActions } from '../../../redux/useAppActions';
import { useSelector } from 'react-redux';
import { selectSettingsSidePanelVisible } from '../../../redux/app/selectors';

const StyledMenuIcon = styled(MenuIcon)`
  color: white;
  margin-right: 10px;
  cursor: pointer;
`;

const SettingsSidePanelMenu = () => {
  const { appActions } = useAppActions();
  const { setSettingsSidePanelVisible } = appActions;
  const sidePanelVisible = useSelector(selectSettingsSidePanelVisible);

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
