import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import { userRole } from '../../../../redux/app/state';
import { useUrlManager } from '../../../../utils/managers/UrlManager';
import { useAppActions } from '../../../../redux/useAppActions';
import { useSelector } from 'react-redux';
import { selectRole } from '../../../../redux/app/selectors';
import { selectSideNavbarHidden } from '../../../../redux/profile/selectors';
import SidePanel from '../../../../components/SidePanel';
import Heading from './components/Heading';
import UserView from './components/UserView';
import AdminView from './components/AdminView';
import { screens, useScreens } from '../../../../utils/useScreens';

const StyledDivider = styled(Divider)`
  && {
    background: rgb(209, 205, 205);
    width: 100%;
    border-color: transparent;
  }
`;

export const SideNavbar = () => {
  const urlManager = useUrlManager();
  const { urlUsername } = urlManager.getParams();
  const role = useSelector(selectRole);
  const hidden = useSelector(selectSideNavbarHidden);
  const { profileActions } = useAppActions();
  const { setProfileView, setSideNavbarHidden } = profileActions;
  const isAdmin = userRole.admin === role;
  const screen = useScreens();

  const adminView = () => {
    if (isAdmin) {
      return <AdminView setProfileView={setProfileView} />;
    }

    return null;
  };

  return (
    <SidePanel
      hidden={hidden}
      setHidden={setSideNavbarHidden}
      openedPanelWidth={220}
      closedPanelWidth={screen > screens.tablet ? 40 : 25}
    >
      <Heading urlUsername={urlUsername} />
      <StyledDivider />
      <UserView
        urlUsername={urlUsername}
        setProfileView={setProfileView}
        isAdmin={isAdmin}
      />
      <StyledDivider />
      {adminView()}
      <StyledDivider />
    </SidePanel>
  );
};

export default SideNavbar;
