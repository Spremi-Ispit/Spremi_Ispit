import styled from 'styled-components';

export const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
  }
  align-items: center;
  div {
    text-align: center;
  }
`;
