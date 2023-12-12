import React from 'react';
import styled from 'styled-components';
import DoubleArrow from '@mui/icons-material/DoubleArrow';
import { MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

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
    margin-top: 8px;
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
  background: ${({ closed }) => (closed ? 'white' : '')};
  z-index: 2;
  height: 100%;
  position: fixed;
  padding: 5px 10px;
`;

const ClosedPanelDiv = styled.div`
  width: ${({ width }) => width}px;
  box-shadow: 2px 1px 5px 0 #393a3d26;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: 5px;
`;

const SidePanelPlaceHolderDiv = styled.div`
  display: flex;
  min-width: ${({ width }) => width}px;
`;

/** @param {SidePanel.propTypes} props */
export const SidePanel = ({
  hidden,
  setHidden,
  children,
  className,
  closedPanelWidth,
  openedPanelWidth,
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

SidePanel.propTypes = {
  hidden: PropTypes.bool,
  setHidden: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  closedPanelWidth: PropTypes.number,
  openedPanelWidth: PropTypes.number,
};

SidePanel.defaultProps = {
  hidden: false,
  setHidden: () => {},
  children: null,
  className: '',
  closedPanelWidth: 40,
  openedPanelWidth: 350,
};

export default SidePanel;
