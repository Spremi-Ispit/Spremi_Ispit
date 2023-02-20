import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BreadcrumbsContainer = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  margin: 0 5px;
  :hover {
    text-decoration: underline;
  }
`;
