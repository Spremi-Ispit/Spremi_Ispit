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

  return (
    <BreadcrumbsContainer>
      <StyledLink to={homeRoute}>Home</StyledLink>
      {'>'}
      <StyledLink>
        {location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)}
      </StyledLink>
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
