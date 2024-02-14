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
import Instagram2ImgSrc from '../../assets/instagram2.png';
import NavLink from '../../components/NavLink';

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

  @media ${screensCSS.laptopL} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

const InstagramFollowUsDiv = styled.div`
  display: flex;
  justify-content: center;
  height: max-content;
  white-space: nowrap;
  font-style: italic;
  margin-bottom: 5px;
`;

const InstagramLinkDiv = styled.div``;

const StyledNavlink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 18px;
  text-decoration: none;

  font-style: italic;
  color: #535cb5;
  :hover {
    color: #333da8;
  }
`;

const InstagramFollowUsImg = styled.img`
  width: 170px;
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
              <InstagramFollowUsDiv>
                <InstagramFollowUsImg
                  src={Instagram2ImgSrc}
                  alt="Follow on Instagram"
                />
              </InstagramFollowUsDiv>
              <InstagramLinkDiv>
                <StyledNavlink
                  as="a"
                  href="https://www.instagram.com/spremiispit/"
                  target="_blank"
                >
                  @SpremiIspit
                </StyledNavlink>
              </InstagramLinkDiv>
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
