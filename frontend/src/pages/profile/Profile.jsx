import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import styled from 'styled-components';
import SideNavbar from './components/SideNavbar/SideNavbar';
import { useSelector } from 'react-redux';
import { selectSettingsSidePanelVisible } from '../../redux/app/selectors';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import { useAppActions } from '../../redux/useAppActions';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex: 1;
`;

const OutletDiv = styled.div`
  flex: 1;
  margin-top: 20px;
  justify-content: center;
`;

export const Profile = () => {
  const settingsSidePanelVisible = useSelector(selectSettingsSidePanelVisible);
  const { appActions, profileActions } = useAppActions();
  const { setSettingsSidePanelVisible } = appActions;
  const { setSideNavbarHidden } = profileActions;

  useEffect(() => {
    setSettingsSidePanelVisible(false);
    setSideNavbarHidden(false);
  }, []);

  const viewToRender = (
    <>
      <Navbar />
      <ProfileDiv>
        {settingsSidePanelVisible && <SettingsSidePanel />}
        <SideNavbar />
        <ContentContainer>
          <OutletDiv>
            <Outlet />
          </OutletDiv>
          <Footer />
        </ContentContainer>
      </ProfileDiv>
    </>
  );

  return viewToRender;
};

export default Profile;
