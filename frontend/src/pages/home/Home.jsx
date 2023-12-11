import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import PostsPreview from './components/PostsPreview/PostsPreview';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../utils/managers/UrlManager';
import { orders } from './components/Filters/components/Order';
import WelcomeModal from './components/WelcomeModal';
import Filters from './components/Filters/Filters';
import SidePanel from './components/SidePanel/SidePanel';
import Footer from '../../components/Footer';

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding-top: 20px;
  margin: 0 auto;
`;

const HomeDiv = styled.div`
  display: flex;
  flex: 1;
  position: relative;
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
      <HomeDiv>
        <SidePanel />
        <ContentContainer>
          <Filters />
          <PostsPreview />
        </ContentContainer>
      </HomeDiv>
      <Footer />
      <WelcomeModal />
    </>
  );
};

export default Home;
