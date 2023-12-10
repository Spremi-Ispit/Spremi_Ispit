import React from 'react';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import { userRole } from '../../../../redux/app/state';
import { useUrlManager } from '../../../../utils/managers/UrlManager';
import { useAppActions } from '../../../../redux/useAppActions';
import { useSelector } from 'react-redux';
import { selectRole } from '../../../../redux/app/selectors';
import { selectSideNavbarHidden } from '../../../../redux/profile/selectors';
import SidePanel from '../../../../components/SidePanel';
import { screens, useScreens } from '../../../../utils/useScreens';
import NavLink from './components/NavLink';
import {
  profileCommentedPostsRoute,
  profileInfoRoute,
  profilePostsRoute,
  profileReportedCommentsRoute,
  profileReportedPostsRoute,
} from '../../../../router/routes';
import { assets } from '../../../../assets';

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

const StlyedAccountCircleIcon = styled.img`
  && {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-position: center;
    object-fit: cover;
  }
`;

const HeadingDiv = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
`;

const HeadingTextDiv = styled.div`
  font-style: italic;
  font-size: 1rem;
  margin-left: 6px;
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

  const adminView = () => {
    if (role !== userRole.admin) {
      return null;
    }

    return (
      <>
        <StyledH3>ADMIN</StyledH3>
        <NavLink to={`${profileReportedPostsRoute}`}>
          Prijavljene objave
        </NavLink>
        <NavLink to={`${profileReportedCommentsRoute}`}>
          Prijavljeni komentari
        </NavLink>
      </>
    );
  };

  return (
    <SidePanel
      hidden={hidden}
      setHidden={setSideNavbarHidden}
      openedPanelWidth={220}
      closedPanelWidth={screen > screens.tablet ? 40 : 25}
    >
      <HeadingDiv>
        <StlyedAccountCircleIcon src={assets.userAccount.avatar} />
        <HeadingTextDiv>{urlUsername}</HeadingTextDiv>
      </HeadingDiv>
      <StyledDivider />
      <StyledH3>PROFIL</StyledH3>
      <NavLink to={`${profilePostsRoute}`}>Objave</NavLink>
      <NavLink to={`${profileCommentedPostsRoute}`}>
        Komentarisane objave
      </NavLink>
      <NavLink to={`${profileInfoRoute}`}>Informacije</NavLink>
      <StyledDivider />
      {adminView()}
      <StyledDivider />
    </SidePanel>
  );
};

export default SideNavbar;
