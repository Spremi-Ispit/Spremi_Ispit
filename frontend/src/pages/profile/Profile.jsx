import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import styled from 'styled-components';
import SideNavbar from './components/SideNavbar/SideNavbar';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../utils/managers/UrlManager';
import { useSelector } from 'react-redux';
import {
  selectSettingsSidePanelVisible,
  selectUsername,
} from '../../redux/app/selectors';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex: 1;
`;

const OutletDiv = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Profile = () => {
  const urlManager = useUrlManager();
  const { urlUsername } = urlManager.getParams();
  const username = useSelector(selectUsername);
  const settingsSidePanelVisible = useSelector(selectSettingsSidePanelVisible);

  useEffect(() => {
    if (!urlUsername) {
      urlManager.updateUrlParamAndReplaceLastHistoryEntry(
        allowedUrlParams.username,
        username
      );
    }
  }, [urlUsername]);

  const viewToRender = (
    <>
      <Navbar />
      <ProfileDiv>
        {settingsSidePanelVisible ? <SettingsSidePanel /> : <SideNavbar />}
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
