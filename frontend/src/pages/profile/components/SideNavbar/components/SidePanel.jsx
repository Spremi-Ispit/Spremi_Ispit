import React from 'react';
import styled from 'styled-components';
import DoubleArrow from '@mui/icons-material/DoubleArrow';
import { MenuItem } from '@mui/material';
import colors from '../../../../../theme/colors';

const ClosePanelArrow = styled(DoubleArrow)`
  && {
    color: white;
    transform: rotate(180deg);
  }
`;

const OpenPanelArrow = styled(DoubleArrow)``;

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
`;

const ClosedPanelDiv = styled.div`
  width: ${({ width }) => width}px;
  box-shadow: 2px 1px 5px 0 #393a3d26;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding-top: 5px;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  background: ${colors.filteri};
  color: white;
`;

const SidePanelPlaceHolderDiv = styled.div`
  display: flex;
  min-width: ${({ width }) => width}px;
`;

export const SidePanel = ({
  hidden,
  setHidden,
  children,
  className,
  closedPanelWidth = 40,
  openedPanelWidth = 350,
}) => {
  return (
    <SidePanelPlaceHolderDiv
      width={hidden ? closedPanelWidth : openedPanelWidth}
    >
      {hidden && (
        <ClosedPanelDiv
          width={closedPanelWidth}
          className={hidden ? className : ''}
          onClick={() => setHidden(false)}
        >
          <OpenPanelArrow />
        </ClosedPanelDiv>
      )}
      <OpenedPanelOverlayDiv
        closed={hidden}
        width={openedPanelWidth}
        className={!hidden ? className : ''}
      >
        {children}
        <StyledMenuItem onClick={() => setHidden(true)}>
          <ClosePanelArrow />
        </StyledMenuItem>
      </OpenedPanelOverlayDiv>
    </SidePanelPlaceHolderDiv>
  );
};

export default SidePanel;
