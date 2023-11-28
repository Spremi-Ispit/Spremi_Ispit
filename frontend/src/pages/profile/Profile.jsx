import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Breadcrumbs from '../../components/Breadcrumbs';
import styled from 'styled-components';
import SideNavbar from './components/SideNavbar/SideNavbar';
import MainContent from './components/mainContent/MainContent';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../utils/managers/UrlManager';
import { useSelector } from 'react-redux';
import { selectUsername } from '../../redux/app/selectors';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  height: 100%;
  flex: 1;
`;

const MainContainer = styled.div`
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
      <MainContainer>
        <SideNavbar />
        <ContentContainer>
          <Breadcrumbs />
          <MainContent />
        </ContentContainer>
      </MainContainer>
    </>
  );

  return viewToRender;
};

export default Profile;
