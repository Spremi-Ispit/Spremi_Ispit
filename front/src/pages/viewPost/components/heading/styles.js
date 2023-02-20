import styled from 'styled-components';

export const HeadingContainer = styled.div`
  display: flex;

  min-width: 230px;
  max-height: 50px;
  height: 50px;
  margin: 0px 20px 10px 20px;

  @media screen and (max-width: 400px) {
    justify-content: space-evenly;
  }
`;

export const StyledH1 = styled.h1`
  text-align: center;
  flex: 1;
`;
