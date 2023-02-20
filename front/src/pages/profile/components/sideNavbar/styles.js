import styled from 'styled-components';
import DoubleArrow from '@mui/icons-material/DoubleArrow';
import ListItemText from '@mui/material/ListItemText';
import { Divider, MenuItem, MenuList } from '@mui/material';

export const slidingEnum = {
  totalWidth: '178',
  optionsWidth: '138',
  toggleContainerWidth: '40',
};

export const StyledMenuList = styled(MenuList)`
  && {
    padding-top: 0px;
  }
`;

export const StyledArrow = styled(DoubleArrow)`
  && {
    transform: ${({ hidden }) => (!hidden ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;

  > h3 {
    font-style: italic;
    font-size: 1rem;
    margin-left: 6px;
    padding-right: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  && > svg {
    width: 30px;
    transform: rotate(-20deg);
  }
`;

export const Options = styled.div`
  margin-top: -1px;
  background-color: white;
  position: relative;
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    display: flex;
    justify-content: center;
    border: 1px solid white;

    color: white;
    width: 80px;

    margin: auto;
    border-radius: 200px;
  }
`;

export const StyledListItemHeaderText = styled(ListItemText)`
  && {
    text-align: start;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 40px;
`;

export const StyledDivider = styled(Divider)`
  && {
    background: rgb(209, 205, 205);
    width: 85%;
    margin: auto;
    border-color: transparent;
  }
`;

export const SlidingContainer = styled.div`
  color: var(--primary-color);
  margin-top: -20px;
  display: flex;
  transition: 0.3s ease-out;
  left: ${({ isHidden }) =>
    isHidden ? `-${slidingEnum.optionsWidth}` : '0'}px;
  width: ${slidingEnum.totalWidth}px;
  text-align: right;
  overflow: auto;
  box-shadow: 2px 1px 5px 0 #393a3d26;
  background: white;
  z-index: 2;
  height: 100%;
  position: fixed;
`;

export const OptionsContainer = styled.div`
  background: var(--primary-color);
  color: white;
  overflow: hidden;
  width: ${({ isHidden }) =>
    isHidden ? slidingEnum.optionsWidth : slidingEnum.totalWidth}px;

  > h3 {
    padding-top: 8px;
    padding-left: 5px;
    padding-bottom: 8px;
    color: rgb(209, 205, 205);
    font-size: 0.9rem;
    text-align: left;
  }
`;

export const ToggleContainer = styled.div`
  cursor: pointer;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  width: fit-contet;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: ${({ isHidden }) =>
    isHidden ? slidingEnum.toggleContainerWidth : '0'}px;
  overflow: hidden;
  background: white;
  color: var(--primary-color);
`;
