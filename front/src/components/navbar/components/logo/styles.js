import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogo = styled.div`
  padding: 2px;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  :hover span {
    text-decoration: none;
    color: white;
  }
`;
