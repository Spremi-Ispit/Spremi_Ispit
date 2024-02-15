import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import PostsPreview from './components/PostsPreview/PostsPreview';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../utils/managers/UrlManager';
import { orders } from './components/Filters/components/Order';
import Filters from './components/Filters/Filters';
import Footer from '../../components/Footer';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import Chat from '../../components/Chat/Chat';
import Companies from './components/Companies/Companies';
import { screensCSS } from '../../utils/useScreens';
import colors from '../../theme/colors';

import Instagram from './components/Ads/Instagram';
import Internship from './components/Ads/Internship';

const ContentDiv = styled.div`
  padding-top: 20px;
  flex: 1;
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media ${screensCSS.laptopL} {
    flex-direction: column;
  }
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

const LeftContentDiv = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;

  @media ${screensCSS.laptopL} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0px;
    padding: 0px 10px 10px 10px;
  }
`;

const MiddleContentDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  padding: 0px 10px;
  margin: auto;

  @media ${screensCSS.laptop} {
    margin: auto;
    padding: 0px 20px;
  }
`;

const RightContentDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media ${screensCSS.laptop} {
    padding: 0px 20px;
    border-top: 2px solid ${colors.footer};
    margin-top: 20px;
    padding-top: 10px;
  }
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
            <LeftContentDiv>
              <Internship />
              <Instagram />
            </LeftContentDiv>
            <MiddleContentDiv>
              <Filters />
              <PostsPreview />
            </MiddleContentDiv>
            <RightContentDiv>
              <Companies />
            </RightContentDiv>
          </ContentDiv>
          <Chat />
          <Footer />
        </MainDiv>
      </HomeDiv>
      {/* <WelcomeModal /> */}
    </>
  );
};

export default Home;
