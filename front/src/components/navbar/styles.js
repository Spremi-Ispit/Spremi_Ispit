import styled from 'styled-components';

export const StyledHeader = styled.header`
  color: white;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  position: relative;
  height: 54px;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  background-color: var(--primary-color);
  z-index: 1000;
  padding-right: 20px;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  div:hover {
    color: blue;
  }

  ul {
    list-style: none;
    display: flex;
    column-gap: 1rem;
    align-items: center;
  }
`;
