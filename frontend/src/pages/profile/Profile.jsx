import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import styled from 'styled-components';
import SideNavbar from './components/SideNavbar/SideNavbar';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../utils/managers/UrlManager';
import { useSelector } from 'react-redux';
import { selectUsername } from '../../redux/app/selectors';
import { Outlet } from 'react-router-dom';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  height: 100%;
  flex: 1;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex: 1;
`;

export const Profile = () => {
  const urlManager = useUrlManager();
  const { urlUsername } = urlManager.getParams();
  const username = useSelector(selectUsername);

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
        <SideNavbar />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </ProfileDiv>
    </>
  );

  return viewToRender;
};

export default Profile;
