import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Wiki from './components/Wiki';
import DoubleArrow from '@mui/icons-material/DoubleArrow';
import { MenuItem } from '@mui/material';
import Profile from './components/Profile';
import Users from './components/Users';
import { selectSettingsSidePanelVisible } from '../../redux/app/selectors';
import colors from '../../theme/colors';
import Videos from './components/Videos';
import CommunityGithub from './components/CommunityGithub';
import CommunityDrives from './components/CommunityDrives';
import CommunityTools from './components/CommunityTools';
import { useAppActions } from '../../redux/useAppActions';
import Home from './components/Home';

const ClosePanelArrow = styled(DoubleArrow)`
  && {
    color: white;
    transform: rotate(180deg);
  }
`;

const OpenedPanelOverlayDiv = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease-out;
  width: ${({ width }) => width}px;
  left: ${({ closed, width }) => (closed ? `-${width}` : '0')}px;
  box-shadow: 2px 1px 5px 0 #393a3d26;
  background: ${colors.filteri};
  z-index: 99999;
  height: 100%;
  position: fixed;
`;

const SidePanelPlaceHolderDiv = styled.div`
  display: flex;
  width: ${({ width }) => width}px;
`;

const ItemDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GreyItemDiv = styled(ItemDiv)`
  background-color: #38393e;
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    display: flex;
    justify-content: center;
    border: 1px solid white;
    color: white;
    width: 80px;
    margin: auto;
    border-radius: 200px;
    margin-top: 20px;
  }
`;

export const SettingsSidePanel = () => {
  const sidePanelVisible = useSelector(selectSettingsSidePanelVisible);
  const { appActions } = useAppActions();
  const { setSettingsSidePanelVisible } = appActions;
  const closedPanelWidth = 0;
  const openedPanelWidth = 200;

  const items = [
    <Home />,
    <Profile />,
    <Users />,
    <Wiki />,
    <Videos />,
    <CommunityGithub />,
    <CommunityDrives />,
    <CommunityTools />,
  ];

  return (
    <SidePanelPlaceHolderDiv
      width={sidePanelVisible ? openedPanelWidth : closedPanelWidth}
    >
      <OpenedPanelOverlayDiv
        closed={!sidePanelVisible}
        width={openedPanelWidth}
      >
        {items.map((item, index) => {
          if (index % 2 === 0) {
            return <ItemDiv key={index}>{item}</ItemDiv>;
          } else {
            return <GreyItemDiv key={index}>{item}</GreyItemDiv>;
          }
        })}
        <StyledMenuItem
          onClick={() => setSettingsSidePanelVisible(!sidePanelVisible)}
        >
          <ClosePanelArrow />
        </StyledMenuItem>
      </OpenedPanelOverlayDiv>
    </SidePanelPlaceHolderDiv>
  );
};

export default SettingsSidePanel;
