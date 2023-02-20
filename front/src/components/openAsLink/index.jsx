import React, { useState, cloneElement } from 'react';
import { ContextMenuContainerDiv } from './styles';

const buttons = {
  left: 0,
  middle: 1,
  right: 2,
  back: 3,
  forward: 4,
};

export const OpenAsLink = ({ children, replaceUrl, openURLInNewTab }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleOnMouseDown = (e) => {
    if (e.button === buttons.left) {
      replaceUrl();
    } else if (e.button === buttons.middle) {
      openURLInNewTab();
    } else if (e.button === buttons.right) {
      console.log(e);
      setMouseX(e.pageX - 75);
      setMouseY(e.pageY - 20);
      setShowMenu(true);
    } else if (e.button === buttons.back) {
    } else if (e.button === buttons.forward) {
    }
  };

  return (
    <>
      {cloneElement(children, {
        onMouseDown: handleOnMouseDown,
        onContextMenu: (e) => e.preventDefault(),
      })}
      {showMenu ? (
        <ContextMenuContainerDiv
          onMouseLeave={() => setShowMenu(false)}
          onContextMenu={(e) => e.preventDefault()}
          mouseX={mouseX}
          mouseY={mouseY}
        >
          <li onClick={openURLInNewTab}>Open in new tab</li>
        </ContextMenuContainerDiv>
      ) : null}
    </>
  );
};

export default OpenAsLink;
