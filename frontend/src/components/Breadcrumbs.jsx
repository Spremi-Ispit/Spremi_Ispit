import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { homeRoute } from '../router/routes';

const BreadcrumbsContainer = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  margin: 0 5px;
  :hover {
    text-decoration: underline;
  }
`;

export const Breadcrumbs = () => {
  const location = useLocation();

  if (location.pathname === homeRoute) return null;

  const currentPath = location.pathname.split('/');
  currentPath.shift();

  return (
    <BreadcrumbsContainer>
      <StyledLink to={homeRoute}>Home</StyledLink>
      {'>'}
      <StyledLink>
        {currentPath.map(
          (path) => path.charAt(0).toUpperCase() + path.slice(1)
        )}
      </StyledLink>
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
