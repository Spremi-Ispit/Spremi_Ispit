import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectFiltersVisible } from '../../../../redux/home/selectors';
import Wiki from './components/Wiki';
import colors from '../../../../theme/colors';
import ReportBug from './components/ReportBug';
import Profile from './components/Profile';
import About from './components/About';
import { selectRole } from '../../../../redux/app/selectors';
import { userRole } from '../../../../redux/app/state';
import Users from './components/Users';

const OpenedPanelOverlayDiv = styled.div`
  padding-top: 10px;
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
  padding: 5px 10px;
`;

const SidePanelPlaceHolderDiv = styled.div`
  display: flex;
  min-width: ${({ width }) => width}px;
`;

export const SidePanel = () => {
  const filtersVisible = useSelector(selectFiltersVisible);
  const closedPanelWidth = 0;
  const openedPanelWidth = 200;

  return (
    <SidePanelPlaceHolderDiv
      width={filtersVisible ? openedPanelWidth : closedPanelWidth}
    >
      <OpenedPanelOverlayDiv closed={!filtersVisible} width={openedPanelWidth}>
        <Wiki />
        <ReportBug />
        <Profile />
        <About />
        <Users />
      </OpenedPanelOverlayDiv>
    </SidePanelPlaceHolderDiv>
  );
};

export default SidePanel;
