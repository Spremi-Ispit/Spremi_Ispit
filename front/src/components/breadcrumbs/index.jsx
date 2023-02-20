import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setHistory } from '../../app/redux/slices';
import { homeRoute } from '../../app/router/routes';
import { BreadcrumbsContainer, StyledLink } from './styles';

const Breadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const history = useSelector((state) => state.app.history);

  useEffect(() => {
    let index = history.findIndex(
      (element) => element.pathname === location.pathname
    );

    if (index > -1) {
      let newHistory = [...history];
      newHistory.splice(index, history.length - index);
      newHistory.push(location);
      dispatch(setHistory(newHistory));
    } else {
      dispatch(setHistory([...history, location]));
    }
  }, [location.search]);

  const handleClick = (index) => {
    const destination = history[index];
    navigate({
      pathname: destination.pathname,
      search: destination.search,
    });
  };

  const crumbs = () => {
    return history.map((location, index) => (
      <Fragment key={location.pathname}>
        <StyledLink
          onClick={() => handleClick(index)}
          to={`${history[index].pathname}${history[index].search}`}
        >
          {location.pathname === homeRoute
            ? 'Početna'
            : location.pathname.charAt(1).toUpperCase() +
              location.pathname.slice(2)}
        </StyledLink>
        {index !== history.length - 1 ? <span>{'>'}</span> : null}
      </Fragment>
    ));
  };

  return (
    <BreadcrumbsContainer>
      {location.pathname === homeRoute ? null : crumbs()}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
