import React from 'react';
import styled from 'styled-components';
import CommentedPosts from './components/CommentedPosts';
import Posts from './components/Posts';
import ReportedComments from './components/reportedComments/ReportedComments';
import ReportedPosts from './components/reportedPosts/ReportedPosts';
import UserInfo from './components/userInfo/UserInfo';
import { profileView } from '../../../../redux/profile/state';
import { useSelector } from 'react-redux';
import { selectProfileView } from '../../../../redux/profile/selectors';
import { screensCSS } from '../../../../utils/useScreens';

const MainContentDiv = styled.div`
  width: 750px;
  align-self: center;
  @media ${screensCSS.tablet} {
    width: 100%;
  }
`;

export const MainContent = () => {
  const view = useSelector(selectProfileView);

  const viewToRender = () => {
    if (view === profileView.posts) {
      return <Posts />;
    }

    if (view === profileView.reportedComments) {
      return <ReportedComments />;
    }

    if (view === profileView.reportedPosts) {
      return <ReportedPosts />;
    }

    if (view === profileView.personalData) {
      return <UserInfo />;
    }

    if (view === profileView.commentedPosts) {
      return <CommentedPosts />;
    }

    return null;
  };

  return <MainContentDiv>{viewToRender()}</MainContentDiv>;
};

export default MainContent;
