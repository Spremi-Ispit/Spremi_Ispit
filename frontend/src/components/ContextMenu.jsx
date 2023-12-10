import React from 'react';
import styled from 'styled-components';

const ContextMenuContainerDiv = styled.ul`
  position: absolute;
  top: ${({ $mouseY }) => $mouseY}px;
  left: ${({ $mouseX }) => $mouseX}px;
  color: black;
  background: white;
  border: 0.5px solid #c9cace;
  padding: 10px;
  cursor: pointer;
  list-style-type: none;
`;

export const contextMenuOption = ({ name, action }) => ({ name, action });

export const ContextMenu = ({
  showMenu,
  onMouseLeave,
  mouseX,
  mouseY,
  options,
}) => {
  if (showMenu) {
    return (
      <ContextMenuContainerDiv
        onMouseLeave={onMouseLeave}
        onContextMenu={(e) => e.preventDefault()}
        $mouseX={mouseX}
        $mouseY={mouseY}
        onMouseDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        onMouseUp={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        {options.map((option) => {
          const { name, action } = contextMenuOption(option);

          return (
            <li key={name} onClick={action}>
              {name}
            </li>
          );
        })}
      </ContextMenuContainerDiv>
    );
  }

  return null;
};

export default ContextMenu;
