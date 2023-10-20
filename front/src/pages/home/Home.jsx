import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import Fliters from '../../components/filters/Fliters';
import Search from './components/Search';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import PaginationAndPostPerPage from './components/pagination/PaginationAndPostPerPage';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../utils/managers/UrlManager';
import Order, { orders } from './components/Order';
import SidePanel from '../../components/SidePanel';
import { selectFiltersVisible } from '../../redux/home/selectors';
import { useSelector } from 'react-redux';
import { useAppActions } from '../../redux/useAppActions';
import { screens, screensCSS, useScreens } from '../../utils/useScreens';
import TuneIcon from '@mui/icons-material/Tune';
import Button from '../../components/buttons/Button';

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 5px;
  margin-top: 20px;
  align-items: center;
`;

const HomeDiv = styled.div`
  display: flex;
  flex: 1;
`;

const SearchDiv = styled.div`
  width: 750px;
  display: flex;
  margin-bottom: 10px;

  @media ${screensCSS.tablet} {
    width: 100%;
  }
`;

const PostsDiv = styled.div`
  width: 750px;
  height: 100%;

  @media ${screensCSS.tablet} {
    width: 100%;
  }
`;

const StyledH2 = styled.h2`
  margin-bottom: 10px;
  border-bottom: 1px solid #c4c4c4;
`;

const StyledButton = styled(Button)`
  && {
    margin-right: 5px;
    margin-left: 5px;
    background: var(--primary);
    color: white;
    :hover {
      background: var(--secondary);
    }
  }
`;

export const Home = () => {
  const urlManager = useUrlManager();
  const { urlOrder } = urlManager.getParams();
  const filtersVisible = useSelector(selectFiltersVisible);
  const { homeActions } = useAppActions();
  const { setFiltersVisible } = homeActions;
  const validOrder = Object.values(orders).includes(urlOrder);
  const screen = useScreens();

  useEffect(() => {
    if (!validOrder) {
      urlManager.updateUrlParam(allowedUrlParams.order, orders.newest);
    }
  }, [urlOrder]);

  if (!validOrder) return null;

  const sidePanel = () => {
    if (screen > screens.tablet || filtersVisible)
      return (
        <SidePanel
          hidden={!filtersVisible}
          setHidden={(hidden) => setFiltersVisible(!hidden)}
          openedPanelWidth={350}
          closedPanelWidth={40}
        >
          <StyledH2>Filteri</StyledH2>
          <Fliters />
          <Order />
        </SidePanel>
      );

    return null;
  };

  const sidePanelSwitcher = () => {
    if (screen > screens.tablet) return null;

    return (
      <StyledButton onClick={() => setFiltersVisible(!filtersVisible)}>
        <TuneIcon />
      </StyledButton>
    );
  };

  return (
    <>
      <Navbar />
      <HomeDiv>
        {sidePanel()}
        <ContentContainer>
          <CreatePost />
          <SearchDiv>
            <Search />
            {sidePanelSwitcher()}
          </SearchDiv>
          <PostsDiv>
            <Posts />
          </PostsDiv>
          <PaginationAndPostPerPage />
        </ContentContainer>
      </HomeDiv>
    </>
  );
};

export default Home;
