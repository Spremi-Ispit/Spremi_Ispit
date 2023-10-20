/*eslint-disable*/
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const maxZIndex = 2147483647;

const DraggableDiv = styled.div`
  cursor: move;
  position: absolute;
  z-index: ${maxZIndex};
  min-width: max-content;
`;

const Draggable = React.forwardRef(
  ({ children, position, className, onDrop, onDrag }, ref) => {
    const draggableDivRef = useRef(null);
    const { left, top } = position;
    const leftRef = useRef(left);
    const topRef = useRef(top);

    useEffect(() => {
      leftRef.current = left;
      topRef.current = top;
      translateElement();
    }, [position]);

    useEffect(() => {
      const draggableDiv = draggableDivRef.current;
      draggableDiv.onmousedown = dragMouseDown;

      let mouseXBeforeDrag = 0;
      let mouseYBeforeDrag = 0;

      function dragMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();

        mouseXBeforeDrag = e.clientX;
        mouseYBeforeDrag = e.clientY;

        document.onmousemove = dragElement;
        document.onmouseup = dropElement;
      }

      function dragElement(e) {
        e.preventDefault();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const distanceX = mouseXBeforeDrag - mouseX;
        const distanceY = mouseYBeforeDrag - mouseY;

        leftRef.current -= distanceX;
        topRef.current -= distanceY;

        translateElement();

        onDrag(getHtmlElementPositions(draggableDiv));

        mouseXBeforeDrag = mouseX;
        mouseYBeforeDrag = mouseY;
      }

      function dropElement() {
        document.onmouseup = null;
        document.onmousemove = null;

        onDrop(getHtmlElementPositions(draggableDiv));
      }

      function getHtmlElementPositions(htmlElement) {
        const left = htmlElement.offsetLeft;
        const top = htmlElement.offsetTop;
        const width = htmlElement.offsetWidth;
        const height = htmlElement.offsetHeight;

        return {
          left,
          top,
          right: left + width,
          bottom: top + height,
        };
      }
    }, []);

    function translateElement() {
      const draggableDiv = draggableDivRef.current;
      draggableDiv.style.left = `${leftRef.current}px`;
      draggableDiv.style.top = `${topRef.current}px`;
    }

    return (
      <DraggableDiv
        ref={(el) => {
          draggableDivRef.current = el;
          if (ref) ref(el);
        }}
        className={className}
      >
        {children}
      </DraggableDiv>
    );
  }
);

Draggable.propTypes = {
  children: PropTypes.node,
  position: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  onDrop: PropTypes.func,
  onDrag: PropTypes.func,
  className: PropTypes.string,
};

Draggable.defaultProps = {
  children: null,
  position: {
    left: 0,
    top: 0,
  },
  onDrop: () => {},
  onDrag: () => {},
  className: '',
};

export default Draggable;
