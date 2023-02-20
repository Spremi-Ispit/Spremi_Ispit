import React from 'react';
import { OpenAsLink as OpenAsLinkDefault } from '../../../openAsLink';
import { useLocation, useNavigate } from 'react-router';
import { homeRoute, viewPostRoute } from '../../../../app/router/routes';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

export const OpenAsLink = ({ postId, children }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentPage = useSelector((state) => state.home.currentPage);
  const postPerPage = useSelector((state) => state.home.postPerPage);
  const location = useLocation();

  const {
    posts: { posts },
    ...homepageFilters
  } = useSelector((state) => state.home);

  const createUrl = () => {
    const selectedPostIndex =
      posts.findIndex((post) => post.id === postId) +
      (currentPage - 1) * postPerPage;

    const { totalNumberOfPosts } = homepageFilters;

    if (homeRoute === location.pathname) {
      return {
        pathname: viewPostRoute,
        search: `${searchParams.toString()}&postId=${postId}&selectedPostIndex=${selectedPostIndex}&totalNumberOfPosts=${totalNumberOfPosts}`,
      };
    } else {
      return {
        pathname: viewPostRoute,
        search: `postId=${postId}`,
      };
    }
  };

  const replaceUrl = () => {
    const { pathname, search } = createUrl();

    navigate({
      pathname,
      search,
    });
  };

  const openURLInNewTab = () => {
    const { pathname, search } = createUrl();
    const newWindow = window.open(
      `${pathname}?${search}`,
      '_blank',
      'noopener,noreferrer'
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <OpenAsLinkDefault
      replaceUrl={replaceUrl}
      openURLInNewTab={openURLInNewTab}
    >
      {children}
    </OpenAsLinkDefault>
  );
};

export default OpenAsLink;
