import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Wiki from './components/Wiki';
import Profile from './components/Profile';
import Users from './components/Users';
import { selectSettingsSidePanelVisible } from '../../redux/app/selectors';
import colors from '../../theme/colors';
import Videos from './components/Videos';
import CommunityGithub from './components/CommunityGithub';
import CommunityDrives from './components/CommunityDrives';
import CommunityTools from './components/CommunityTools';

const OpenedPanelOverlayDiv = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease-out;
  width: ${({ width }) => width}px;
  left: ${({ closed, width }) => (closed ? `-${width}` : '0')}px;
  box-shadow: 2px 1px 5px 0 #393a3d26;
  background: ${colors.filteri};
  z-index: 2;
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

export const SettingsSidePanel = () => {
  const sidePanelVisible = useSelector(selectSettingsSidePanelVisible);
  const closedPanelWidth = 0;
  const openedPanelWidth = 200;

  const items = [
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
      </OpenedPanelOverlayDiv>
    </SidePanelPlaceHolderDiv>
  );
};

export default SettingsSidePanel;
