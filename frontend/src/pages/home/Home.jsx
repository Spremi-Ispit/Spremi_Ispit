import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import PostsPreview from './components/PostsPreview/PostsPreview';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../utils/managers/UrlManager';
import { orders } from './components/Filters/components/Order';
// import WelcomeModal from './components/WelcomeModal';
import Filters from './components/Filters/Filters';
import Footer from '../../components/Footer';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import Chat from '../../components/Chat/Chat';

const ContentDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding-top: 20px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

const HomeDiv = styled.div`
  display: flex;
  flex: 1;
`;

export const Home = () => {
  const urlManager = useUrlManager();
  const { urlOrder } = urlManager.getParams();
  const validOrder = Object.values(orders).includes(urlOrder);

  useEffect(() => {
    if (!validOrder) {
      urlManager.updateUrlParamAndReplaceLastHistoryEntry(
        allowedUrlParams.order,
        orders.newest
      );
    }
  }, [urlOrder]);

  if (!validOrder) return null;

  return (
    <>
      <Navbar />
      <SettingsSidePanel />
      <HomeDiv>
        <MainDiv>
          <ContentDiv>
            <Filters />
            <PostsPreview />
            <Chat />
          </ContentDiv>
          <Footer />
        </MainDiv>
      </HomeDiv>
      {/* <WelcomeModal /> */}
    </>
  );
};

export default Home;
