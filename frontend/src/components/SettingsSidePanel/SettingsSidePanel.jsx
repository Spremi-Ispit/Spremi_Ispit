import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Wiki from './components/Wiki';
import Profile from './components/Profile';
import Users from './components/Users';
import { selectSettingsSidePanelVisible } from '../../redux/app/selectors';
import colors from '../../theme/colors';

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
  position: relative;
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

  return (
    <SidePanelPlaceHolderDiv
      width={sidePanelVisible ? openedPanelWidth : closedPanelWidth}
    >
      <OpenedPanelOverlayDiv
        closed={!sidePanelVisible}
        width={openedPanelWidth}
      >
        <ItemDiv>
          <Profile />
        </ItemDiv>
        <GreyItemDiv>
          <Users />
        </GreyItemDiv>
        <ItemDiv>
          <Wiki />
        </ItemDiv>
      </OpenedPanelOverlayDiv>
    </SidePanelPlaceHolderDiv>
  );
};

export default SettingsSidePanel;
