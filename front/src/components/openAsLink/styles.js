import styled from 'styled-components';

export const ContextMenuContainerDiv = styled.ul`
  position: absolute;
  top: ${({ mouseY }) => mouseY}px;
  left: ${({ mouseX }) => mouseX}px;
  color: black;
  background: white;
  border: 0.5px solid #c9cace;
  padding: 10px;
  cursor: pointer;
  list-style-type: none;
`;
