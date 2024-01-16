import React from 'react';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import { userRole } from '../../../../redux/app/state';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../utils/managers/UrlManager';
import { useAppActions } from '../../../../redux/useAppActions';
import { useSelector } from 'react-redux';
import { selectRole, selectUsername } from '../../../../redux/app/selectors';
import { selectSideNavbarHidden } from '../../../../redux/profile/selectors';
import { screens, useScreens } from '../../../../utils/useScreens';
import NavLink from './components/NavLink';
import {
  profileCommentedPostsRoute,
  profileInfoRoute,
  profilePostsRoute,
  profileReportedCommentsRoute,
  profileReportedPostsRoute,
} from '../../../../router/routes';
import SidePanel from './components/SidePanel';

const StyledDivider = styled(Divider)`
  && {
    background: rgb(209, 205, 205);
    width: 100%;
    border-color: transparent;
  }
`;

const StyledH3 = styled.h3`
  padding-top: 8px;
  padding-left: 5px;
  padding-bottom: 8px;
  color: rgb(209, 205, 205);
  font-size: 0.9rem;
  text-align: left;
`;

const HeadingDiv = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  font-weight: bold;
  justify-content: center;
`;

const HeadingTextDiv = styled.h3`
  font-style: italic;
  padding-right: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SideNavbar = () => {
  const urlManager = useUrlManager();
  const { urlUsername } = urlManager.getParams();
  const role = useSelector(selectRole);
  const hidden = useSelector(selectSideNavbarHidden);
  const { profileActions } = useAppActions();
  const { setSideNavbarHidden } = profileActions;
  const screen = useScreens();
  const username = useSelector(selectUsername);

  const navigateTo = (route) =>
    `${route}?${allowedUrlParams.username}=${urlUsername}`;

  return (
    <SidePanel
      hidden={hidden}
      setHidden={setSideNavbarHidden}
      openedPanelWidth={200}
      closedPanelWidth={screen > screens.tablet ? 40 : 25}
    >
      <HeadingDiv>
        <HeadingTextDiv>{urlUsername}</HeadingTextDiv>
      </HeadingDiv>
      <StyledDivider />
      <StyledH3>PROFIL</StyledH3>
      <NavLink to={navigateTo(profilePostsRoute)}>Objave</NavLink>
      <NavLink to={navigateTo(profileCommentedPostsRoute)}>
        Komentarisane objave
      </NavLink>
      {(username === urlUsername || role === userRole.admin) && (
        <NavLink to={navigateTo(profileInfoRoute)}>Informacije</NavLink>
      )}
      <StyledDivider />
      {role === userRole.admin && (
        <>
          <StyledH3>ADMIN</StyledH3>
          <NavLink to={navigateTo(profileReportedPostsRoute)}>
            Prijavljene objave
          </NavLink>
          <NavLink to={navigateTo(profileReportedCommentsRoute)}>
            Prijavljeni komentari
          </NavLink>
        </>
      )}
      <StyledDivider />
    </SidePanel>
  );
};

export default SideNavbar;
