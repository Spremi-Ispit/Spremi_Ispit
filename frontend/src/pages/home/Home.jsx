import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import Posts from './components/Posts';
import PaginationAndPostPerPage from './components/pagination/PaginationAndPostPerPage';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../utils/managers/UrlManager';
import Order, { orders } from './components/Order';
import { selectFiltersVisible } from '../../redux/home/selectors';
import { useSelector } from 'react-redux';
import { useAppActions } from '../../redux/useAppActions';
import { screens, screensCSS, useScreens } from '../../utils/useScreens';
import Button from '../../components/buttons/Button';
import WelcomeModal from './components/WelcomeModal';
import Filters from './components/Filters/Filters';
import SidePanel from './components/SidePanel/SidePanel';

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

const PostsDiv = styled.div`
  width: 750px;
  height: 100%;

  @media ${screensCSS.tablet} {
    width: 100%;
  }
`;

export const Home = () => {
  const urlManager = useUrlManager();
  const { urlOrder } = urlManager.getParams();

  const validOrder = Object.values(orders).includes(urlOrder);
  const screen = useScreens();

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
          <PostsDiv>
            <Posts />
          </PostsDiv>
          <PaginationAndPostPerPage />
        </ContentContainer>
      </HomeDiv>
      <WelcomeModal />
    </>
  );
};

export default Home;
